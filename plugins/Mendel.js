const { cmd } = require("../command");

cmd({
    pattern: "mendel",
    alias: ["tati-janet", "tati-kiki"],
    desc: "Send the mendel meme audio",
    category: "spam",
    react: "💫",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        await conn.sendMessage(from, {
            audio: { url: "https://files.catbox.moe/8jw9fc.mp4" },
            mimetype: "audio/mpeg",
            ptt: false
        }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply("*❌ mendel Failed!*\n_Blyat! Error: " + e.message + "_");
    }
});

cmd({
    pattern: "mendel2",
    alias: ["tati-janet2", "tati-kiki2"],
    desc: "Send the mendel meme audio",
    category: "spam",
    react: "😹",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        await conn.sendMessage(from, {
            audio: { url: "https://files.catbox.moe/8cs3ke.mp4" },
            mimetype: "audio/mpeg",
            ptt: false
        }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply("*❌ mendel2 Failed!*\n_Blyat! Error: " + e.message + "_");
    }
});

cmd({
    pattern: "mendel3",
    alias: ["tati-janet3", "tati-kiki3"],
    desc: "Send the mendel meme audio",
    category: "spam",
    react: "😭",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        await conn.sendMessage(from, {
            audio: { url: "https://files.catbox.moe/f1y2qe.mp4" },
            mimetype: "audio/mpeg",
            ptt: false
        }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply("*❌ mendel3 Failed!*\n_Blyat! Error: " + e.message + "_");
    }
});
