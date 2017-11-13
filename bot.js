const discord = require('discord.js');
const bot = new discord.Client();

bot.on("ready", () => {
  console.log("Real Life Hulk Simulator v1.0 loaded")
  bot.user.setGame("Hulkbot Dev...")
})

bot.login(proccess.env.token)
