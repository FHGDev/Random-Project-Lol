const discord = require('discord.js');
const bot = new discord.Client();

bot.on("ready", () => {
  console.log("Real Life Hulk Simulator v1.0 loaded")
  bot.user.setGame("School...")
})
 
bot.on("message", message => {
  if (message.content == "Hey Hulk") {
     message.reply("Sup")
   }
  if (message.content == "How ya doing? Is Hulkbot going well?") {
     message.channel.send("Yeah it's going pretty well. I don't have much time to be on anymore, but Heroku will host my bot 24/7 which is good.")
  }
  if (message.content == "Oh, I've gtg. Cya later.") {
     message.channel.send("Okay same here. Cya later.")
  }
})

bot.login(process.env.token)
