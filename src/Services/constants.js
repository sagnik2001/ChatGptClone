const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPEN_API_KEY,
});
export const openai = new OpenAIApi(configuration);
