
const prompt= require ("prompt-sync")()
  let apiKey = "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"

async function fetchStockInfo(name){
    const response = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=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")
    const data = await response.json();
    console.log(data); 
    return data;
  }  


async function fetchAI(chat){
    const options = {
        headers: {
            Authorization: "Bearer " + apiKey,
            "Content-Type": "application/json",
        },
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "Investment Manager"
      },
      {
        role: "user",
        content: chat
      }
    ]
        }        

    const response = await fetch("https://api.openai.com/v1/chat/completions", options)
    const data = await response.json();
    console.log(data); 
    return data;
  }
  //"Hello, What investment would you like to look at? Enter the symbol
