const { cmd } = require('../command');
const config = require('../config');
const { getGPTResponse } = require('../lib/gpt');

let chatgptEnabled = false;

cmd({
  pattern: "chatgpt",
  category: "ai",
  desc: "Enable/disable ChatGPT and ask questions",
  use: "<on/off/question>",
  filename: __filename
}, async (msg, sock, args) => {
  const sender = msg.key.remoteJid;
  const input = args.join(' ').trim();

  if (!input) {
    return await sock.sendMessage(sender, { text: '⚙️ Use `.chatgpt on`, `.chatgpt off`, or `.chatgpt <your question>`' });
  }

  if (input.toLowerCase() === 'on') {
    chatgptEnabled = true;
    return await sock.sendMessage(sender, { text: '✅ ChatGPT is now *ON*' });
  }

  if (input.toLowerCase() === 'off') {
    chatgptEnabled = false;
    return await sock.sendMessage(sender, { text: '❌ ChatGPT is now *OFF*' });
  }

  if (!chatgptEnabled) {
    return await sock.sendMessage(sender, { text: '⚠️ ChatGPT is OFF. Use `.chatgpt on` to turn it on.' });
  }

  try {
    const reply = await getGPTResponse(input);
    await sock.sendMessage(sender, { text: reply });
  } catch (err) {
    console.error("❌ GPT Error:", err);
    await sock.sendMessage(sender, { text: '🚫 Error getting ChatGPT response. Try again later.' });
  }
});
