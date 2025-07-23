const { cmd } = require('../command');

cmd({
  pattern: "getstickerid",
  category: "utility",
  desc: "Get sticker ID or media info",
  use: "",
  filename: __filename
}, async (msg, sock) => {
  const sender = msg.key.remoteJid;

  // Verify if a sticker is quoted
  if (!msg.quoted || msg.quoted.mtype !== 'stickerMessage') {
    return await sock.sendMessage(sender, { text: "❌ Please reply to a *sticker* using `.getstickerid`" });
  }

  try {
    const media = msg.quoted;
    const stickerID = media.message?.stickerMessage?.fileSha256;

    if (!stickerID) {
      return await sock.sendMessage(sender, { text: "❌ Unable to get sticker ID." });
    }

    // Convert to base64
    const base64ID = Buffer.from(stickerID).toString('base64');

    return await sock.sendMessage(sender, {
      text: `✅ Sticker ID:\n\`\`\`${base64ID}\`\`\``
    });
  } catch (err) {
    console.error("getstickerid error:", err);
    return await sock.sendMessage(sender, { text: "❌ An error occurred while getting sticker ID." });
  }
});
