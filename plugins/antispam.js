const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "antispam",
    desc: "Show bot anti-spam policy",
    category: "main",
    filename: __filename,
    react: "🚫"
},
async (conn, m, msg, { from, sender }) => {
    try {
        const senderName = m.pushName || 'User';

        const caption = `
🚫 *ANTI-SPAM POLICY — JESUS-CRASH-V1*

Hello *${senderName}*, here are the rules enforced by our bot:

🔴 Spamming commands, flooding text, or repeated abuse is *prohibited*.

✅ 1st Violation: *Warning* ⚠️  
⚠️ 2nd Violation: *Muted or Restricted* ⛔  
❌ 3rd Violation: *Permanent Ban or Block* 🔒

Our system detects:
• Mass tagging
• Repeating commands
• Long flood texts

Let’s keep *JESUS-CRASH-V1* safe and clean for all 🛡️✨

— *JESUS MODERATION TEAM* ⚙️
`.trim();

        const fakeContact = {
            key: {
                fromMe: false,
                participant: '0@s.whatsapp.net',
                remoteJid: 'status@broadcast',
            },
            message: {
                contactMessage: {
                    displayName: "JESUS SYSTEM",
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:JESUS SYSTEM\nORG:JESUS-CRASH-V1;\nTEL;type=CELL;type=VOICE;waid=13058962443:+1 305 8962443\nEND:VCARD`
                }
            }
        };

        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/fuoqii.png' },
            caption,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: 'JESUS-BOTS SUPPORT',
                    newsletterJid: '120363419768812867@newsletter',
                    serverMessageId: 121
                }
            }
        }, { quoted: fakeContact });

    } catch (e) {
        console.error("Error in antispam command:", e);
        await conn.sendMessage(from, { text: `⚠️ Error: ${e.message}` });
    }
});