const os = require('os');
const { cmd, commands } = require('../command');
const config = require('../config');

// Small caps function
function toSmallCaps(str) {
  const smallCaps = {
    A: 'ᴀ', B: 'ʙ', C: 'ᴄ', D: 'ᴅ', E: 'ᴇ', F: 'ғ', G: 'ɢ', H: 'ʜ',
    I: 'ɪ', J: 'ᴊ', K: 'ᴋ', L: 'ʟ', M: 'ᴍ', N: 'ɴ', O: 'ᴏ', P: 'ᴘ',
    Q: 'ǫ', R: 'ʀ', S: 's', T: 'ᴛ', U: 'ᴜ', V: 'ᴠ', W: 'ᴡ', X: 'x',
    Y: 'ʏ', Z: 'ᴢ'
  };
  return str.toUpperCase().split('').map(c => smallCaps[c] || c).join('');
}

cmd({
  pattern: 'menu',
  alias: ['allmenu', 'mke'],
  desc: 'Show command menu',
  category: 'menu',
  react: '📜',
  filename: __filename
}, async (conn, mek, m, { from, pushname, isOwner }) => {

  // ✅ Fonction reply
  const reply = (text) => conn.sendMessage(from, { text }, { quoted: mek });

  // ✅ Owner check
  if (!isOwner) return reply("❌ This command is for the bot *owner only*.");

  try {
    const botName = config.BOT_NAME || 'JESUS-CRASH-V1';
    const ownerName = config.OWNER_NAME || '𝐃𝐀𝐖𝐄𝐍𝐒 𝐁𝐎𝐘';
    const menuImage = config.MENU_IMAGE_URL || 'https://files.catbox.moe/qq8b03.png';
    const userName = pushname || 'User';
    const prefix = config.PREFIX || '.';
    const mode = config.MODE || 'default';

    const stages = [
      '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜  0%',
      '🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜  10%',
      '🟩🟩⬜⬜⬜⬜⬜⬜⬜⬜  25%',
      '🟩🟩🟩🟩⬜⬜⬜⬜⬜⬜  50%',
      '🟩🟩🟩🟩🟩🟩⬜⬜⬜⬜  75%',
      '🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩  100%'
    ];
    let loadingMsg = await conn.sendMessage(from, { text: `🖤 Loading...\n${stages[0]}` }, { quoted: mek });

    for (let i = 1; i < stages.length; i++) {
      await new Promise(r => setTimeout(r, 500));
      await conn.sendMessage(from, {
        edit: loadingMsg.key,
        text: `🖤 Loading...\n${stages[i]}`
      });
    }

    await new Promise(r => setTimeout(r, 900));
    await conn.sendMessage(from, {
      edit: loadingMsg.key,
      text: `✅ Loading complete! Preparing menu...`
    });

    // Group commands by category
    const grouped = {};
    for (const plugin of commands) {
      const category = (plugin.category || 'other').toUpperCase();
      if (!grouped[category]) grouped[category] = [];
      grouped[category].push(plugin);
    }

    // Uptime & RAM usage
    const uptime = () => {
      const sec = process.uptime();
      const h = Math.floor(sec / 3600);
      const m = Math.floor((sec % 3600) / 60);
      const s = Math.floor(sec % 60);
      return `${h}h ${m}m ${s}s`;
    };

    const ramUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(1);
    const totalRam = (os.totalmem() / 1024 / 1024).toFixed(1);

    // Menu header
    let text = `╭───〔 *${botName} MENU* 〕───⬣
│ 🤖 Bot de: *${ownerName}*
│ 💬 User: *${userName}*
│ ⏱️ Uptime: *${uptime()}*
│ ⏺️ Mode: *${mode}*
│ 🛠️ RAM: *${ramUsage}MB / ${totalRam}MB*
│ 🔰 Prefix: *${prefix}*
╰──────────────⬣\n`;

    // Commands per category
    let menuText = '';

    for (let k of Object.keys(grouped)) {
      menuText += `\n\n╔═══❖•ೋ 🌐 *${k} MENU* ೋ•❖═══╗\n`;

      const cmds = grouped[k]
        .filter(c => c.pattern)
        .sort((a, b) => a.pattern.localeCompare(b.pattern));

      cmds.forEach((cmd) => {
        const usage = cmd.pattern.split('|')[0];
        menuText += `║ ➤ ${prefix}${toSmallCaps(usage)}\n`;
      });

      menuText += `╚════════════════════╝`;
    }

    menuText += `\n\n🔋 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝐃𝐀𝐖𝐄𝐍𝐒 𝐁𝐎𝐘`;

    // Send menu
    await conn.sendMessage(from, {
      image: { url: menuImage },
      caption: (text + menuText).trim(),
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 777,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363419768812867@newsletter',
          newsletterName: botName,
          serverMessageId: 143
        }
      }
    }, { quoted: mek });

    // Random audio
    const audioOptions = [
      'https://files.catbox.moe/3cj1e3.mp4',
      'https://files.catbox.moe/vq3odo.mp4',
      'https://files.catbox.moe/fo2kz0.mp4',
      'https://files.catbox.moe/31os2j.mp4',
      'https://files.catbox.moe/2auhjw.mp4',
      'https://files.catbox.moe/czk8mu.mp4'
    ];

    const randomAudio = audioOptions[Math.floor(Math.random() * audioOptions.length)];

    try {
      await conn.sendMessage(from, {
        audio: { url: randomAudio },
        mimetype: 'audio/mp4',
        ptt: true
      }, { quoted: mek });
    } catch (e) {
      console.error('⚠️ Audio send failed:', e.message);
    }

  } catch (e) {
    console.error('❌ Menu error:', e.message);
    await reply(`❌ Menu Error: ${e.message}`);
  }
});
