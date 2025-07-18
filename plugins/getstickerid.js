const { cmd } = require('../command');

cmd({
  pattern: 'getstickerid',
  alias: ['stickid', 'sid'],
  desc: 'Get the unique ID of the replied sticker (static or animated)',
  category: 'utility',
  react: '🧩',
  usage: '.getstickerid (reply to sticker)',
  async handler(m, { conn }) {
    try {
      if (!m.quoted) return await m.reply('❌ Please reply to a sticker.');

      const quotedMsg = m.quoted.message;

      // Posib kote sticker ka ye
      const stickerMsg = quotedMsg?.stickerMessage ||
                         quotedMsg?.animatedStickerMessage ||
                         (quotedMsg?.documentMessage && 
                          /webp|gif/i.test(quotedMsg.documentMessage.mimetype || '') 
                            ? quotedMsg.documentMessage 
                            : null);

      if (!stickerMsg) return await m.reply('❌ This is not a sticker.');

      const fileSha256 = stickerMsg.fileSha256;

      if (!fileSha256 || !Buffer.isBuffer(fileSha256))
        return await m.reply('❌ Sticker ID not available.');

      const hexSha256 = fileSha256.toString('hex');

      await m.reply(`🆔 *Sticker ID Info:*\n\n\`\`\`${hexSha256}\`\`\``);

    } catch (e) {
      console.error(e);
      await m.reply('❌ An error occurred while fetching sticker ID.');
    }
  }
});
