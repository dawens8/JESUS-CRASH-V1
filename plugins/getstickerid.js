const { cmd } = require('../command');

cmd({
  pattern: 'getstickerid',
  desc: 'Get the unique ID of the replied sticker',
  category: 'utility',
  react: '😍',
  usage: '.getstickerid (reply to sticker)',
  async handler(m, { conn, reply }) {
    try {
      if (!m.quoted) return await reply('❌ Please reply to a sticker.');

      const isSticker = m.quoted.message && m.quoted.message.stickerMessage;
      if (!isSticker) return await reply('❌ Please reply specifically to a sticker.');

      const sticker = m.quoted.message.stickerMessage;

      const id = sticker.id || 'N/A';
      const fileSha256 = sticker.fileSha256 ? sticker.fileSha256.toString('hex') : 'N/A';

      // Eske reply ap voye mesaj? Sinon itilize conn.sendMessage dirèk
      await conn.sendMessage(m.chat, `📌 Sticker IDs:\n\n- id: \`${id}\`\n- fileSha256 (hex): \`${fileSha256}\``);

    } catch (e) {
      console.error(e);
      await reply('❌ Error getting sticker ID.');
    }
  }
});
