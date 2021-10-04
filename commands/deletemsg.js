const {channel} = require('diagnostics_channel')
const Discord = require('discord.js')

module.exports = {
  name: 'deletemsg',
  description: 'this is deletes given number times messages, command.',
  async execute(message, args) {
    let user = message.author.id
    let msgID
    console.log(user)
    var msg = message.toString()
    var times = msg.substring(msg.length - 2)
    console.log(msg, times, message.toString().length)
    if (message.toString().length > 15 || times == 0) {
      message.reply(`\n**Hatalı kullanım.** Yardım için; Zhelp`).then((res) => {
        msgID = res.id
      })
    } else {
      var helper = 0
      for (var i = 0; i < 100; i++) {
        if (times == i) {
          helper = 1
          break
        }
      }

      if (helper != 1) {
        message
          .reply(`Geçersiz bir değer. lütfen 0-100 arasında bir miktar girin.`)
          .then((res) => {
            msgID = res.id
          })
      } else {
        async function clear() {
          const fetched = await message.channel.messages.fetch({limit: times})
          message.channel.bulkDelete(fetched)
        }
        clear()

        message.channel
          .send(`<@${user}>,  ${times} adet mesaj silindi.`)
          .then((res) => {
            msgID = res.id
          })
      }
    }
    setTimeout(() => {
      message.channel.messages.fetch(msgID).then((msg) => msg.delete())
    }, 5000)
  }
}
