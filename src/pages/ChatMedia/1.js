const { PromptTemplate } = require("langchain/prompts");
const { ChatOpenAI } = require("langchain/chat_models/openai");

// const model = new ChatOpenAI({
//   openAIApiKey: "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",
// });
// const promptTemplate = PromptTemplate.fromTemplate(
//   "Tell me a joke about {topic}"
// );

// const chain = promptTemplate.pipe(model);

// const result = chain.invoke({ topic: "bears" });

// setTimeout(() => {
//   console.log(result);
// }, 10000);

export async function getLangChainResult(appendMsg, msg) {
  const model = new ChatOpenAI({
    openAIApiKey: "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",
  });
  const promptTemplate = PromptTemplate.fromTemplate(appendMsg + " " + msg);

  const chain = promptTemplate.pipe(model);

  return await chain.invoke();
}
