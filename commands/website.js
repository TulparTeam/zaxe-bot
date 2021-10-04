module.exports = {
  name: 'website',
  description: 'this is sends website link, command.',
  execute(message, args) {
    message.channel.send('https://zaxe.com')
  }
}
