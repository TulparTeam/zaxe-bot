const {Console} = require('console')
const {channel} = require('diagnostics_channel')
const Discord = require('discord.js')

module.exports = {
  name: 'waker_message',
  description: 'This command is for bot stay awake.',
  execute(client) {
    let channelID = '894864477038710824'
    let theChannel = client.channels.cache.get(channelID)

    theChannel.send(`I'm awake.`).then((msg) => {
      let messageID = msg.id
      Console.log('[ RUN ] > Bot Waking Up.')
      theChannel.messages.fetch(messageID).then((olderMessage) => {
        setTimeout(() => {
          olderMessage.delete()
          Console.log('[ RUN ] > Bot Awake.')
        }, 2000)
      })
    })
  }
}
