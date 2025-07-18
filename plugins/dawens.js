const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "dawens",
    alias: ["thanksto"],
    desc: "thanks to dev for helping",
    category: "main",
    react: "🗯️",
    filename: __filename
},
async (conn, mek, m, { from }) => {
    try {
        const message =`╭━━━⪨𝐉𝐄𝐒𝐔𝐒-𝐂𝐑𝐀𝐒𝐇-𝐕𝟏⪩━━━╮
┃╭╼━━━━━━━━━━━┈⊷
┃┃👨‍💻 𝗗𝗘𝗩:𝐃𝐀𝐖𝐄𝐍𝐒 𝐁𝐎𝐘
┃┃🪀 𝗡𝗨𝗠𝗕𝗘𝗥:+50942241547
┃┃🛠️ 𝗕𝗡𝗔𝗠𝗘:𝐉𝐄𝐒𝐔𝐒-𝐂𝐑𝐀𝐒𝐇-𝐕𝟏
┃┃🙋‍♂️ 𝗛𝗜: @${m.sender.split("@")[0]}
┃╰╼━━━━━━━━━━━┈⊷
╰╼══════════════╾╯
> *𝑃𝑂𝑊𝐸𝑅𝐸𝐷 𝐵𝑌  𝐃𝐀𝐖𝐄𝐍𝐒 𝐁𝐎𝐘*`;

        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/fuoqii.png' },
            caption: message,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1000,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363419768812867@newsletter', // remplace avec ton vrai newsletterJid si besoin
                    newsletterName: ' 𝐃𝐀𝐖𝐄𝐍𝐒 𝐁𝐎𝐘',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (err) {
        console.error("ThanksTo Error:", err);
        await conn.sendMessage(from, { text: `Error: ${err.message}` }, { quoted: mek });
    }
});
                    
