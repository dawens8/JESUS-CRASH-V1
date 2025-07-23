// Plugin tgs2.js — Convert Telegram animated stickers to 
const axios = require('axios');
const { Sticker, StickerTypes } = require('wa-sticker-formatter');
const { cmd } = require('../command');

cmd({
  pattern: 'tgs2',
  alias: ['tgsticker', 'telegramsticker'],
  react: '🎴',
  desc: 'Download Telegram stickers (animated + video)',
  category: 'fun',
  filename: __filename
}, async (conn, mek, m, { from, reply, args, sender, pushname }) => {
  try {
    if (!args[0]) {
      return reply('*Please provide a Telegram sticker pack link.*\n\nExample: `.tgs https://t.me/addstickers/telepack`');
    }

    const link = args.join(' ');
    const packName = link.split('/addstickers/')[1];

    if (!packName) return reply('❌ Invalid Telegram sticker pack link.');

    const BOT_TOKEN = '7025486524:AAGNJ3lMa8610p7OAIycwLtNmF9vG8GfboM';
    const setUrl = `https://api.telegram.org/bot${BOT_TOKEN}/getStickerSet?name=${encodeURIComponent(packName)}`;
    const packData = await axios.get(setUrl);

    const isAnimated = packData.data.result.is_animated;
    const stickers = packData.data.result.stickers;

    let introMsg = `*TELEGRAM STICKER PACK*\n\n` +
                   `*Name:* ${packData.data.result.name}\n` +
                   `*Animated:* ${isAnimated ? '✅ Yes' : '❌ No'}\n` +
                   `*Total:* ${stickers.length}\n\n_Processing..._`;

    await conn.sendMessage(from, {
      image: { url: `https://files.catbox.moe/06cgye.jpg` },
      caption: introMsg
    }, { quoted: mek });

    for (let i = 0; i < stickers.length; i++) {
      const fileId = stickers[i].file_id;
      const getFileUrl = `https://api.telegram.org/bot${BOT_TOKEN}/getFile?file_id=${fileId}`;
      const fileInfo = await axios.get(getFileUrl);
      const filePath = fileInfo.data.result.file_path;

      let stickerBuffer;

      if (isAnimated) {
        // Download TGS & convert via API
        const tgsData = await axios.get(`https://api.telegram.org/file/bot${BOT_TOKEN}/${filePath}`, {
          responseType: 'arraybuffer'
        });

        const webpRes = await axios.post('https://tgs-to-webp-api.dawensboy.repl.co/convert', tgsData.data, {
          headers: { 'Content-Type': 'application/octet-stream' },
          responseType: 'arraybuffer'
        });

        stickerBuffer = webpRes.data;

      } else {
        // Normal sticker → convert directly
        const imageData = await axios.get(`https://api.telegram.org/file/bot${BOT_TOKEN}/${filePath}`, {
          responseType: 'arraybuffer'
        });

        const sticker = new Sticker(imageData.data, {
          pack: 'GOD DAWENS',
          author: pushname,
          type: StickerTypes.FULL,
          categories: ['🌟'],
          quality: 70
        });

        stickerBuffer = await sticker.toBuffer();
      }

      await conn.sendMessage(from, { sticker: stickerBuffer }, { quoted: mek });
      await new Promise(resolve => setTimeout(resolve, 1000)); // Delay to avoid spam
    }

    reply('✅ Sticker pack download complete!');

  } catch (err) {
    console.error('TGS Error:', err);
    reply('❌ Error processing Telegram sticker pack.');
  }
});
