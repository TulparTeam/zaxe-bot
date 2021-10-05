module.exports = {
  name: 'website',
  description: 'This commands is sends website link of zaxe.',
  execute(message, args) {
    message.channel.send('https://zaxe.com').then(() => {
      console.log(
        `\n\n\n[ RUN ] > Send Website\nUsername : ${message.author.username}\nUser ID : ${message.author.id}`
      )
    })
  }
}
