const { cmd } = require('../command');

cmd({
  pattern: 'getstickerid',
  desc: 'Get the unique ID of the replied sticker',
  category: 'utility',
  react: '😍',
  usage: '.getstickerid (reply to sticker)',
  async handler(m, { conn, reply }) {
    try {
      // Asire gen mesaj reply
      if (!m.quoted) return reply('❌ Please reply to a sticker.');

      // Verifye si mesaj replied la se sticker
      const isSticker = m.quoted.message && m.quoted.message.stickerMessage;
      if (!isSticker) return reply('❌ Please reply specifically to a sticker.');

      // Pran done sticker la
      const sticker = m.quoted.message.stickerMessage;

      // Pran ID ak fileSha256
      const id = sticker.id || 'N/A';
      const fileSha256 = sticker.fileSha256 ? sticker.fileSha256.toString('hex') : 'N/A';

      // Reponn ak enfòmasyon yo
      await reply(
        `📌 Sticker IDs:\n\n- id: \`${id}\`\n- fileSha256 (hex): \`${fileSha256}\``
      );

    } catch (e) {
      console.error(e);
      await reply('❌ Error getting sticker ID.');
    }
  }
});