const {channel} = require('diagnostics_channel')
const Discord = require('discord.js')

module.exports = {
  name: 'deletemsg',
  description: 'This command is for deleteing messages as given count.',
  async execute(message, args) {
    let user = message.author.id
    let msgID
    var msg = message.toString()
    var times = msg.substring(msg.length - 2)
    if (message.toString().length > 15 || times == 0) {
      message
        .reply(`\n**Hatalı kullanım.** Yardım için; Zhelp`)
        .then((res) => {
          msgID = res.id
        })
        .then(() => {
          setTimeout(() => {
            message.channel.messages
              .fetch(msgID)
              .then((msg) => msg.delete())
              .then(() => {
                console.log(
                  `\n\n\n[ RUN ] > Delete Messages\nUsername : ${message.author.username}\nUser ID : ${message.author.id}\nResult : [ WRONG SYNTAX ]`
                )
              })
              .catch((err) => {
                console.log(
                  `\n\n\n[ ERROR ] > Delete Messages\n Description : Message Not Found\nUsername : ${message.author.username}\nUser ID : ${message.author.id}\n`
                )
              })
          }, 5000)
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
          .then(() => {
            setTimeout(() => {
              message.channel.messages
                .fetch(msgID)
                .then((msg) => msg.delete())
                .then(() => {
                  console.log(
                    `\n\n\n[ RUN ] > Delete Messages\nUsername : ${message.author.username}\nUser ID : ${message.author.id}\nResult : [ WRONG COUNT ]`
                  )
                })
                .catch((err) => {
                  console.log(
                    `\n\n\n[ ERROR ] > Delete Messages\n Description : Message Not Found\nUsername : ${message.author.username}\nUser ID : ${message.author.id}\n`
                  )
                })
            }, 5000)
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
          .then(() => {
            setTimeout(() => {
              message.channel.messages
                .fetch(msgID)
                .then((msg) => msg.delete())
                .then(() => {
                  console.log(
                    `\n\n\n[ RUN ] > Delete Messages\nUsername : ${message.author.username}\nUser ID : ${message.author.id}\nResult : [ SUCCESS ]`
                  )
                })
                .catch((err) => {
                  console.log(
                    `\n\n\n[ ERROR ] > Delete Messages\n Description : Message Not Found\nUsername : ${message.author.username}\nUser ID : ${message.author.id}\n`
                  )
                })
            }, 5000)
          })
      }
    }
  }
}
