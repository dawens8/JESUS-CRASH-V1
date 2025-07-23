require('dotenv').config();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function getGPTResponse(prompt) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    });

    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error("❌ GPT Error:", error);
    return "❌ Error contacting ChatGPT.";
  }
}

module.exports = { getGPTResponse };
