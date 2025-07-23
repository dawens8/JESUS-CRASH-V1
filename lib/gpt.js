const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: 'YOUR_OPENAI_API_KEY', // mete kle GPT ou a
});

const openai = new OpenAIApi(configuration);

async function getGPTResponse(prompt) {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });

  return response.data.choices[0].message.content.trim();
}

module.exports = { getGPTResponse };
