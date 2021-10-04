module.exports = {
  name: 'website',
  description: 'this is sends website link, command.',
  execute(message, args) {
    const pritns = [
      {name: 'Test', link: 'https://www.thingiverse.com/thing:4965226'}
    ]

    message.channel.send('https://zaxe.com')
  }
}
