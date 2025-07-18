const { cmd } = require('../command');

cmd({
    pattern: "antibug",
    alias: ["cleanbug", "bugfix"],
    use: ".antibug",
    desc: "Clean bug/crash messages in chat.",
    category: "utility",
    react: "💙",
    filename: __filename
},
async (conn, m, mdata, { from, sender }) => {
    try {
        // ⬇️ Ranplase fetchMessages ak loadMessages pou Baileys v6
        let messages = await conn.loadMessages(from, 25); 
        let deleted = 0;
        let blocked = new Set();

        for (let msg of messages) {
            const content =
                msg.message?.conversation ||
                msg.message?.extendedTextMessage?.text ||
                "";

            const isBug =
                content.length > 1000 ||
                /[\u200B-\u200F\uFEFF]/.test(content);

            if (isBug) {
                try {
                    await conn.sendMessage(from, {
                        delete: {
                            remoteJid: from,
                            fromMe: msg.key.fromMe,
                            id: msg.key.id,
                            participant: msg.key.participant || from
                        }
                    });
                    deleted++;

                    const userToBlock = msg.key.participant || msg.key.remoteJid;
                    if (userToBlock && !blocked.has(userToBlock)) {
                        try {
                            await conn.updateBlockStatus(userToBlock, "block");
                            blocked.add(userToBlock);
                        } catch (e) {
                            console.warn(`Can't block ${userToBlock}`);
                        }
                    }
                } catch (e) {
                    console.warn(`Can't delete msg: ${msg.key.id}`);
                }
            }
        }

        await conn.sendMessage(from, {
            text: `✅ AntiBug Completed.\n🧹 Deleted: *${deleted}* bugs\n🚫 Blocked: *${blocked.size}* users`,
            mentions: [sender]
        });

    } catch (err) {
        console.error("❌ AntiBug error:", err);
        await conn.sendMessage(from, { text: `❌ Failed to clean bug messages.` });
    }
});
