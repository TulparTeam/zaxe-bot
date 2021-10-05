const Discord = require('discord.js')
const {sendDate} = require('../getDate.js')
module.exports = {
  name: 'waker_message',
  description: 'This command is for bot stay awake.',
  execute(client) {
    let channelID = '894864477038710824'
    let theChannel = client.channels.cache.get(channelID)
    theChannel.send(`I'm awake.`).then((msg) => {
      let messageID = msg.id
      console.log(`\n\n\n[ RUN ] > Bot Waking Up.\n|\n${sendDate()}`)
      theChannel.messages
        .fetch(messageID)
        .then((olderMessage) => {
          setTimeout(() => {
            olderMessage.delete()
            console.log(`\n\n\n[ RUN ] > Bot Awake.\n|\n${sendDate()}`)
          }, 2000)
        })
        .catch((err) => {
          console.log(
            `\n\n\n[ ERROR ] > Bot Waker\n|\n| Description : ${err}\n|\n${sendDate()}`
          )
        })
    })
  }
}
