module.exports = {
  name: 'website',
  description: 'This commands is sends website link of zaxe.',
  execute(message, args) {
    message
      .reply('https://zaxe.com')
      .then(() => {
        console.log(
          `\n\n\n[ RUN ] > Send Website\nUsername : ${message.author.username}\nUser ID : ${message.author.id}`
        )
      })
      .catch((err) => {
        console.log(
          `\n\n\n[ ERROR ] > Send Website\nDescription : Message Not Found\nUsername : ${message.author.username}\nUser ID : ${message.author.id}\n`
        )
      })
  }
}
