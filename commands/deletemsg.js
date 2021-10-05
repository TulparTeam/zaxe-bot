const {channel} = require('diagnostics_channel')
const Discord = require('discord.js')
const {sendDate} = require('../getDate.js')
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
                  `\n\n\n[ RUN ] > Delete Messages\n|\n| Username : ${
                    message.author.username
                  }\n| User ID : ${
                    message.author.id
                  }\n| Result : [ WRONG SYNTAX ]\n|\n${sendDate()}`
                )
              })
              .catch((err) => {
                console.log(
                  `\n\n\n[ ERROR ] > Delete Messages\n|\n|Description : Message Not Found\n| Username : ${
                    message.author.username
                  }\n| User ID : ${message.author.id}\n|\n${sendDate()}`
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
                    `\n\n\n[ RUN ] > Delete Messages\n|\n| Username : ${
                      message.author.username
                    }\n| User ID : ${
                      message.author.id
                    }\n| Result : [ WRONG COUNT ]\n|\n${sendDate()}`
                  )
                })
                .catch((err) => {
                  console.log(
                    `\n\n\n[ ERROR ] > Delete Messages\n|\n| Description : Message Not Found\n| Username : ${
                      message.author.username
                    }\n| User ID : ${message.author.id}\n|\n${sendDate()}`
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
                    `\n\n\n[ RUN ] > Delete Messages\n|\n| Username : ${
                      message.author.username
                    }\n| User ID : ${
                      message.author.id
                    }\n| Result : [ SUCCESS ]\n|\n${sendDate()}`
                  )
                })
                .catch((err) => {
                  console.log(
                    `\n\n\n[ ERROR ] > Delete Messages\n|\n| Description : Message Not Found\n| Username : ${
                      message.author.username
                    }\n| User ID : ${message.author.id}\n|\n${sendDate()}`
                  )
                })
            }, 5000)
          })
      }
    }
  }
}
