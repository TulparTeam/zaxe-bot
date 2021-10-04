const Discord = require('discord.js')

module.exports = {
  name: 'updatelog',
  description: 'This commands send update log to #update-logs channel.',
  execute(message, args) {
    if (message.member.roles.cache.has('893439201687764992')) {
      message.channel.send('True!')
    } else {
      message.channel.send('False!')
    }
  }
}
