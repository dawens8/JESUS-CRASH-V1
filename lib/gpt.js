const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: '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', // mete kle GPT ou a
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
