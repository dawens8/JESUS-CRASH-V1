const { cmd } = require('../command');

cmd({
  pattern: 'getstickerid',
  desc: 'Get the unique ID of the replied sticker',
  category: 'utility',
  react: '🧩',
  usage: '.getstickerid (reply to sticker)',
  async handler(m, { conn }) {
    try {
      if (!m.quoted) return await m.reply('❌ Please reply to a sticker.');

      const stickerMsg = m.quoted.message?.stickerMessage;
      if (!stickerMsg) return await m.reply('❌ This is not a sticker.');

      // Get fileSha256 properly
      const fileSha256 = stickerMsg.fileSha256;
      const hexSha256 = Buffer.isBuffer(fileSha256)
        ? fileSha256.toString('hex')
        : '❌ fileSha256 not available.';

      const msgText = `🆔 *Sticker ID Info:*\n\n- fileSha256: \`\`\`${hexSha256}\`\`\``;

      await m.reply(msgText);

    } catch (e) {
      console.error(e);
      await m.reply('❌ An error occurred while fetching sticker ID.');
    }
  }
});
