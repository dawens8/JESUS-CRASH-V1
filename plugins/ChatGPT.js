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
  const lower = text.toLowerCase();

  if (lower === "on") {
    gptEnabled = true;
    return m.reply("✅ ChatGPT is now ON");
  }

  if (lower === "off") {
    gptEnabled = false;
    return m.reply("❌ ChatGPT is now OFF");
  }

  if (!gptEnabled) {
    return m.reply("❗ChatGPT is OFF. Type: `.chatgpt on` to activate.");
  }

  if (!text) return m.reply("❓Antre yon kesyon apre `.chatgpt`");

  try {
    const res = await getGPTResponse(text);
    m.reply(res);
  } catch (e) {
    m.reply("❌ Erè pandan repons lan soti. Tcheke API kle ou a.");
    console.error("GPT Error:", e);
  }
});
