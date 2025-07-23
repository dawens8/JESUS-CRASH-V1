// Plugin tgs2.js — Convert Telegram animated stickers to 
const axios = require('axios');
const sharp = require('sharp');
const { Sticker, StickerTypes } = require('wa-sticker-formatter');
const { cmd } = require('../command');

cmd({
  pattern: 'tgs2',
  alias: ['tgsticker', 'telegramsticker'],
  react: '🎴',
  desc: 'Download and convert Telegram sticker packs to WhatsApp stickers',
  category: 'main',
  filename: __filename
}, async (conn, mek, m, { from, reply, args, pushname }) => {
  try {
    if (!args[0]) {
      return reply('*Please provide a Telegram sticker pack link.*\n\nExample: `.tgs https://t.me/addstickers/<pack>`');
    }

    const lien = args.join(' ');
    const name = lien.split('/addstickers/')[1];

    if (!name) return reply('❌ Invalid Telegram sticker link.');

    const API_KEY = '7025486524:AAGNJ3lMa8610p7OAIycwLtNmF9vG8GfboM';
    const apiURL = `https://api.telegram.org/bot${API_KEY}/getStickerSet?name=${encodeURIComponent(name)}`;
    const stickers = await axios.get(apiURL);

    const type = stickers.data.result.is_animated ? 'Animated' : 'Static';
    const total = stickers.data.result.stickers.length;

    await conn.sendMessage(from, {
      image: { url: `https://files.catbox.moe/06cgye.jpg` },
      caption: `*Telegram Sticker*\n\n*Pack:* ${stickers.data.result.name}\n*Type:* ${type}\n*Stickers:* ${total}\n\n⏳ Please wait...`,
    }, { quoted: mek });

    for (let i = 0; i < total; i++) {
      const fileId = stickers.data.result.stickers[i].file_id;

      // Get File Path
      const fileInfo = await axios.get(`https://api.telegram.org/bot${API_KEY}/getFile?file_id=${fileId}`);
      const filePath = fileInfo.data.result.file_path;

      // Download File
      const res = await axios.get(`https://api.telegram.org/file/bot${API_KEY}/${filePath}`, {
        responseType: 'arraybuffer'
      });

      // Optimize with sharp
      const optimized = await sharp(res.data)
        .resize(512, 512, { fit: 'inside' }) // Fit inside 512x512
        .webp({ quality: 45 }) // Reduce quality for size
        .toBuffer();

      // Create Sticker
      const sticker = new Sticker(optimized, {
        pack: 'GOD DA',
        author: pushname,
        type: StickerTypes.FULL,
        quality: 45,
        categories: ['🌟'],
        background: '#000000',
      });

      const stickerBuffer = await sticker.toBuffer();

      await conn.sendMessage(from, { sticker: stickerBuffer }, { quoted: mek });

      await new Promise(resolve => setTimeout(resolve, 1200)); // Rate limit avoid
    }

    reply('✅ Sticker pack conversion complete!');
  } catch (error) {
    console.error('Telegram sticker error:', error);
    reply('❌ Failed to process sticker pack. Try another one or later.');
  }
});
