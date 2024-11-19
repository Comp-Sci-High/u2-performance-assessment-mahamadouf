require ('dotenv').config()
const prompt = require("prompt-sync")()
let apiKey = "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"

async function fetchStockInfo() {
 try{
  const response = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + user + "&interval=60min&apikey=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")
 if (response.ok === false){
  console.log("HTTP error! Status: " + response.status);
 }
 
  const data = await response.json();
  console.log(data);
  return data;
} catch (error){
  console.log("An error occurred:" + error.message)
}
}

async function fetchAI(chat) {
  let requestBody = {
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "You are an assistant.",
      }, 
      {
        role: "user",
        content: "Tesla stock performance today"
      }
    ]
  }

  const options = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),

  }
try{
  const response = await fetch("https://api.openai.com/v1/chat/completions", options)
  if (response.ok === false){
    console.log("HTTP error! Status: " + response.status);
   }
  const data = await response.json();
  console.log(data.choices[0].message.content);
  return data;
} catch (error){
  console.log("An error occurred:" + error.message)
}
}

let user = prompt("Hello, Do you want to see tesla's stock performance?")

async function main() {
  let bobana = await fetchAI(user);
}

main()