const fs = require('fs/promises');
const path = require('path');
const { fork } = require('child_process');
const config = require('../config');

const { cmd } = require('../command');

cmd({
  pattern: 'deploy2',
  desc: 'Deploy a new session from MEGA link',
  category: 'owner',
  usage: '.deploy <SESSION_ID>',
  react: '🚀',
  async handler(m, { conn }) {
    let sessionId = m.body.split(' ')[1];
    if (!sessionId) {
      return m.reply("❌ Usage: .deploy <SESSION_ID>\nExample: `.deploy JESUS~CRASH~V1~abc#def123`");
    }

    if (sessionId.startsWith('JESUS~CRASH~V1~')) {
      sessionId = sessionId.split('JESUS~CRASH~V1~')[1];
    }

    if (!sessionId.includes('#')) {
      return m.reply("❌ Invalid format! Use: .deploy <SESSION_ID>\nExample: `.deploy JESUS~CRASH~V1~abc#def123`");
    }

    const sessionName = `user-${Date.now()}`;
    const sessionPath = path.resolve('./multi/sessions', sessionName);
    await fs.mkdir(sessionPath, { recursive: true });

    try {
      const [fileId, key] = sessionId.split('#');
      const { File } = await import('megajs');
      const file = File.fromURL(`https://mega.nz/file/${fileId}#${key}`);

      const buffer = await new Promise((resolve, reject) => {
        file.download((err, data) => (err ? reject(err) : resolve(data)));
      });

      await fs.writeFile(path.join(sessionPath, 'creds.json'), buffer);

      const child = fork(path.resolve('./multi/startClient.js'), [], {
        env: {
          SESSION_NAME: sessionName,
          PREFIX: config.PREFIX || '.',
          OWNER_NUMBER: m.sender
        }
      });

      await conn.sendMessage(m.chat, {
        text: `
╔════[ ✅ BOT DEPLOYED ]════
║📦 Session: *${sessionName}*
║🧩 Prefix: *${config.PREFIX || '.'}*
║👑 Owner: *${m.sender.split('@')[0]}*
╚═════════════════════════`,
      }, { quoted: m });

    } catch (e) {
      console.error(e);
      await conn.sendMessage(m.chat, {
        text: "❌ Deployment failed! Make sure your MEGA link is valid and try again.",
      }, { quoted: m });
    }
  }
});
