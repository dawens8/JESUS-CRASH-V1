// handler/handler-antispam.js
const checkSpam = require('../lib/antispam');

module.exports = async function handleAntispam(client, msg) {
  const m = msg.messages[0];
  if (!m.message) return false;

  const sender = m.key.remoteJid;

  const spamCheck = checkSpam(sender);

  if (spamCheck.blocked) {
    await client.sendMessage(sender, {
      text: '🚫 You are temporarily blocked for spamming. Please wait 1 minute.',
    });
    return true; // Itilizatè an blòke
  }

  return false; // Pa gen spam
}
