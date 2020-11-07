const Discord = require("discord.js");
const client = new Discord.Client();
const axios = require("axios");

client.on("ready", () => {
  console.log("Bot is Up and Running");
});

client.on("message", (message) => {
  if (message.content.split(" ")[0] == "!chess") {
    axios({
      url: "https://lichess.org/api/challenge/open",
      method: "POST",
      data: {
        variant: "standard",
      },
    })
      .then((res) => {
        message.reply(res.data.challenge.url);
      })
      .catch((e) => {
        message.reply("error " + e.message);
      });
  }
});

client.login(
  "Nzc0MTc0MDM1MDQyODkzODQ1.X6T7wQ.4i2l65dPN6XlEiLMYKOuIVKKHDk"
);
