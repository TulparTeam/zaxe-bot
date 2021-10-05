const {sendDate} = require('../getDate.js')

module.exports = {
  name: 'website',
  description: 'This commands is sends website link of zaxe.',
  execute(message, args) {
    message
      .reply('https://zaxe.com')
      .then(() => {
        console.log(
          `\n\n\n[ RUN ] > Send Website\n|\n| Username : ${
            message.author.username
          }\n| User ID : ${message.author.id}\n|\n${sendDate()}`
        )
      })
      .catch((err) => {
        console.log(
          `\n\n\n[ ERROR ] > Send Website\n|\n| Description : Message Not Found\n| Username : ${
            message.author.username
          }\n| User ID : ${message.author.id}\n|\n${sendDate()}`
        )
      })
  }
}
