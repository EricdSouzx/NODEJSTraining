const { GoogleGenerativeAI } = require("@google/generative-ai");
const readline = require("readline");
require("dotenv").config(); 

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function chat(userInput) {
  const chat = model.startChat({
    history: [],
    generationConfig: {
      maxOutputTokens: 100,
    },
  });
  let result = await chat.sendMessage(userInput);
  console.log(result.response.text());
}

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function askQuestion() {
    rl.question("You: ", async (userInput) => {
      await chat(userInput); 
      askQuestion();
    });
  }

  console.log("ChatBot is running. Type your message:");
  askQuestion();
}

main().catch(console.error);
