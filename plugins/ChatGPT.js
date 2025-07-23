const { cmd } = require('../command');
const { getGPTResponse } = require('../lib/gpt');

cmd({
  pattern: "chatgpt",
  desc: "Get a response from ChatGPT",
  category: "ai",
  use: "<your question>",
  filename: __filename
}, async (message, match) => {
  if (!match) {
    return message.reply("❗ Please enter a question after `.chatgpt`");
  }

  await message.react("🤖");

  const reply = await getGPTResponse(match);
  return message.reply(reply);
});
