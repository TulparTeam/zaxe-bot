module.exports = {
  name: 'website',
  description: 'This commands is sends website link of zaxe.',
  execute(message, args) {
    message.channel.send('https://zaxe.com')
  }
}
