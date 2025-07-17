const { cmd } = require('../command');
const moment = require('moment-timezone');
const config = require('../config');

cmd({
  pattern: "deploy",
  alias: ["setup", "freebot"],
  use: ".deploy",
  desc: "Guide to deploy JESUS-CRASH-V1 bot on various platforms.",
  category: "system",
  react: "🚀",
  filename: __filename
},
async (conn, m, mdata, { from, sender }) => {

  const text = `
📦 *JESUS-CRASH-V1 FREE-DEPLOYMENT GUIDE FOLLOW STEPS BELOW💯*

📌 *STEP 1: Scan Session*
🔗 https://sessions-jesus-crash.onrender.com/

📌 *STEP 2: Choose Platform*

☁️ *HEROKU*
• Deploy: https://heroku.com/deploy?template=https://github.com/dawens8/JESUS-CRASH-V1
• Add \`SESSION_ID\`
• Deploy and Open App

⚙️ *RENDER*
• Login: https://render.com
• Fork repo: https://github.com/dawens8/JESUS-CRASH-V1
• Create Web Service
• Set env \`SESSION_ID\`
• Deploy

🚂 *RAILWAY*
• Deploy: https://railway.app/template/Wvukql
• Paste repo
• Set env \`SESSION_ID\`
• Deploy & run

💻 *REPLIT*
• Open: https://replit.com/github/dawens8/JESUS-CRASH-V1
• Add \`SESSION_ID\` in Secrets
• Click Run
• Use UptimeRobot for 24/7

📎 *Repo:* https://github.com/dawens8/JESUS-CRASH-V1
🧠 Need help? DM @GOD DAWENS +13058962443 or join our support group.
`;

  const quoted = {
    key: {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast"
    },
    message: {
      contactMessage: {
        displayName: "JESUS-CRASH-V2 SUPPORT",
        vcard: `
BEGIN:VCARD
VERSION:3.0
FN:JESUS-CRASH-V1 SUPPORT
ORG:JESUS-CRASH-V1;
TEL;type=CELL;type=VOICE;waid=13058962443:+13058962443
END:VCARD`
      }
    }
  };

  const contextInfo = {
    mentionedJid: [sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363419768812867@newsletter",
      newsletterName: "JESUS-CRASH-V1 DEPLOY UPDATES",
      serverMessageId: 110
    }
  };

  await conn.sendMessage(from, {
    text,
    contextInfo
  }, { quoted });
});
