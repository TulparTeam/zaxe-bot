const Discord = require('discord.js')
const {MessageEmbed} = require('discord.js')

module.exports = {
  name: 'help',
  description: 'This commands shows all commands.',
  execute(message, args) {
    const embed = new MessageEmbed()
      .setColor('#009ade')
      .addField('\u200B', '\u200B', false)
      .setAuthor(
        'Zaxe 3D Printing Technologies',
        'https://zaxe.com/wp-content/uploads/2021/08/cropped-cropped-xdesktop_icon.png',
        'https://zaxe.com'
      )
      .setThumbnail(
        'https://zaxe.com/wp-content/uploads/2021/10/zaxe-logo-beyaz-1.png'
      )
      .addFields({name: 'Visit Our Website', value: 'https://zaxe.com'})
      .addField('\u200B', '\u200B', false)
      .addFields(
        {name: 'Usage :\t Z<command>', value: '\u200b', inline: true},
        {name: '\u200b', value: 'Main Commands'},
        {name: 'help', value: 'Shows all commands.', inline: false},
        {name: 'website', value: 'Shows website url.', inline: false},
        {
          name: 'deletemsg <count>',
          value: 'Deletes messages given length.',
          inline: false
        },
        {name: '\u200B', value: '\u200B'},
        {name: '\u200b', value: 'Fun Commands'},
        {
          name: 'randomprint',
          value: 'Shows a random object for 3D Printing',
          inline: false
        },
        {
          name: 'coding',
          value: 'Sends random coding gif.',
          inline: false
        }
      )
      .setTimestamp()
      .setFooter(
        `Let's print something!`,
        `https://zaxe.com/wp-content/uploads/2021/08/cropped-cropped-xdesktop_icon.png`
      )
    message.channel.send({embeds: [embed]}).then(() => {
      console.log(
        `\n\n\n[ RUN ] > Help \nUsername : ${message.author.username}\nUser ID : ${message.author.id}`
      )
    })
  }
}
