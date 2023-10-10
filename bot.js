require('dotenv').config()

const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => {
  ctx.reply("You have clicked the Start command")
})

bot.on('photo', (ctx) => {
  const photo = ctx.message.photo[0] // Get the first photo from the message

  // Reply with the photo and the text "Hi there" below it
  ctx.replyWithPhoto(photo.file_id, { caption: 'Hi there' })
})

bot.launch()