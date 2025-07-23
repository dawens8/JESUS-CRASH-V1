const { cmd } = require('../command');
const { getGPTResponse } = require('../lib/gpt');

let gptEnabled = false;

cmd({
  pattern: "chatgpt",
  desc: "Chat ak GPT",
  category: "ai",
  use: "<on|off|question>",
  react: "🤖",
  filename: __filename
}, async (m, text, { sock }) => {
  console.log("TEXT:", text); // Debug

  const lower = text.trim().toLowerCase();

  if (lower === "on") {
    gptEnabled = true;
    return await m.reply("✅ ChatGPT mode is now ON");
  }

  if (lower === "off") {
    gptEnabled = false;
    return await m.reply("❌ ChatGPT mode is now OFF");
  }

  if (!gptEnabled) {
    return await m.reply("❗ChatGPT is OFF. Use `.chatgpt on` to turn it on.");
  }

  if (!text) return await m.reply("❓ Antre yon kesyon apre `.chatgpt`");

  try {
    const response = await getGPTResponse(text);
    await m.reply("🤖 " + response);
  } catch (err) {
    console.error("GPT ERROR:", err);
    await m.reply("❌ Erè pandan repons lan sòti. Verifye kle OpenAI ou a.");
  }
});
