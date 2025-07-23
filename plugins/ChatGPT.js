const { cmd } = require('../command');
const config = require('../config');
const { getGPTResponse } = require('../lib/gpt');

let chatgptEnabled = false; // Global toggle

cmd({
  pattern: "chatgpt",
  category: "ai",
  desc: "ChatGPT ON/OFF and ask question",
  use: "<on/off/message>",
  filename: __filename
}, async (msg, sock, args) => {
  const sender = msg.key.remoteJid;
  const input = args.join(' ').trim().toLowerCase();

  if (!input) {
    return await sock.sendMessage(sender, { text: 'Use `.chatgpt on`, `.chatgpt off`, or `.chatgpt <message>`' });
  }

  if (input === 'on') {
    chatgptEnabled = true;
    return await sock.sendMessage(sender, { text: '✅ ChatGPT mode is now *ON*' });
  }

  if (input === 'off') {
    chatgptEnabled = false;
    return await sock.sendMessage(sender, { text: '❌ ChatGPT mode is now *OFF*' });
  }

  if (!chatgptEnabled) {
    return await sock.sendMessage(sender, { text: '⚠️ ChatGPT is OFF. Use `.chatgpt on` to enable it.' });
  }

  try {
    const reply = await getGPTResponse(input);
    await sock.sendMessage(sender, { text: reply });
  } catch (err) {
    console.error("GPT Error:", err);
    await sock.sendMessage(sender, { text: '❌ Error fetching GPT response. Try again later.' });
  }
});
