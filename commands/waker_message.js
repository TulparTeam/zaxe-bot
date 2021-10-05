const {channel} = require('diagnostics_channel')
const Discord = require('discord.js')

module.exports = {
  name: 'waker_message',
  description: 'This command is for bot stay awake.',
  execute(client, args) {
    let channelID = '894864477038710824'
    let theChannel = client.channels.cache.get(channelID)

    theChannel.send(`I'm awake.`).then((msg) => {
      let messageID = msg.id
      theChannel.messages.fetch(messageID).then((olderMessage) => {
        setTimeout(() => {
          olderMessage.delete()
        }, 2000)
      })
    })
  }
}
