const Discord = require('discord.js')

module.exports = {
  name: 'deletemsg',
  description: 'this is deletes given number times messages, command.',
  execute(message, args) {
    var msg = message.toString()
    var times = msg.substring(msg.length - 2)
    console.log(msg, times, message.toString().length)
    if (message.toString().length > 14 || times == 0) {
      message
        .reply('\n**Hatalı kullanım.** Yardım için; Zhelp')
        .then((message) => {
          message.delete({timeout: 7000})
        })
        .catch()
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
          .reply(
            times +
              ' Geçersiz bir değer. lütfen 0-100 arasında bir miktar girin.'
          )
          .then((message) => {
            message.delete({timeout: 2000})
          })
          .catch()
      } else {
        async function clear() {
          message.delete()
          const fetched = await message.channel.messages.fetch({limit: times})
          message.channel.bulkDelete(fetched)
        }
        clear()
        message
          .reply(times + ' Adet mesaj silindi.')
          .then((message) => {
            message.delete({timeout: 2000})
          })
          .catch()
      }
    }
  }
}
