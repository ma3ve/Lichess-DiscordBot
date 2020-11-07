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

client.login(process.env.DISCORDTOKEN);
