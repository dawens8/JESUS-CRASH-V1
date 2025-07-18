const config = require('../config');
const { cmd } = require('../command');

cmd({
    pattern: "antibug2",
    alias: ["clearbug2", "kickbug2", "cleanbug2"],
    use: '.antibug2',
    desc: "Clean bug/crash messages, kick sender (if group), and block",
    category: "utility",
    react: "🛡️",
    filename: __filename
},
async (conn, mek, m, { from, sender, isGroup, participants, reply }) => {
    try {
        const messages = await conn.loadMessages(from, 25);
        let deleted = 0;
        let kicked = 0;
        let blocked = new Set();

        for (let msg of messages) {
            const content =
                msg.message?.conversation ||
                msg.message?.extendedTextMessage?.text ||
                "";

            const isBug = content.length > 1000 || /[\u200B-\u200F\uFEFF]/.test(content);
            if (!isBug) continue;

            // Try to delete
            try {
                await conn.sendMessage(from, {
                    delete: {
                        remoteJid: from,
                        fromMe: msg.key.fromMe,
                        id: msg.key.id,
                        participant: msg.key.participant || msg.key.remoteJid
                    }
                });
                deleted++;

                const target = msg.key.participant || msg.key.remoteJid;

                // Kick if group
                if (isGroup && participants.some(p => p.id === target)) {
                    try {
                        await conn.groupParticipantsUpdate(from, [target], "remove");
                        kicked++;
                    } catch (e) {
                        console.warn(`Can't kick: ${target}`);
                    }
                }

                // Block the user
                if (target && !blocked.has(target)) {
                    try {
                        await conn.updateBlockStatus(target, 'block');
                        blocked.add(target);
                    } catch (e) {
                        console.warn(`Can't block: ${target}`);
                    }
                }

            } catch (e) {
                console.warn(`Can't delete msg: ${msg.key.id}`);
            }
        }

        const fakeContact = {
            key: {
                fromMe: false,
                participant: '0@s.whatsapp.net',
                remoteJid: 'status@broadcast',
            },
            message: {
                contactMessage: {
                    displayName: "JESUS SYSTEM",
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:JESUS SYSTEM\nORG:NEXUS-XMD;\nTEL;type=CELL;type=VOICE;waid=254700000000:+254 700 000000\nEND:VCARD`
                }
            }
        };

        const text = `🛡️ *AUTO ANTI-BUG CLEANER*\n\n✅ Deleted: *${deleted}* bug/crash messages\n🚫 Blocked: *${blocked.size}* users\n${isGroup ? `👢 Kicked: *${kicked}* users\n` : ''}\n*Status:* Safe\n*Powered by:* JESUS-CRASH`;

        await conn.sendMessage(from, {
            text,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363419768812867@newsletter',
                    newsletterName: "JESUS-BOTS SUPPORT",
                    serverMessageId: 300
                }
            }
        }, { quoted: fakeContact });

    } catch (e) {
        console.error("❌ Error in antibug2:", e);
        reply(`❌ Failed to execute antibug: ${e.message}`);
    }
});
