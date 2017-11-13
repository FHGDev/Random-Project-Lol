const discord = require('discord.js');
const bot = new discord.Client();

bot.on("ready", () => {
  console.log("Real Life Hulk Simulator v1.0 loaded")
  bot.user.setGame("Hulkbot Dev...")
})
 
bot.on("message", message => {
  if (message.content == "Hey Hulk") {
     message.reply("Sup")
   }
})

bot.login(process.env.token)
