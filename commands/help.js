const Discord = require('discord.js')

module.exports = {
  name: 'help',
  description: 'this is shows commands , command.',
  execute(message, args) {
    const embed = new Discord.MessageEmbed()
      .setColor('#009ade')
      .setTitle('Bot Commands')
      .setAuthor(
        'Zaxe 3D Printing Technologies',
        'https://zaxe.com/wp-content/uploads/2021/08/cropped-cropped-xdesktop_icon.png',
        'https://zaxe.com'
      )
      .setDescription('Visit our website\n https://zaxe.com')
      .setThumbnail(
        'https://zaxe.com/wp-content/uploads/2021/10/zaxe-logo-beyaz-1.png'
      )
      .addField('\u200B', '\u200B', true)

      .addFields(
        {name: 'Main Commands', value: '\u200B'},
        {name: 'Prefix', value: '"Z"', inline: true},
        {name: 'Zhelp', value: 'Shows all commands.', inline: true},
        {name: 'Zwebsite', value: 'Shows website url.', inline: true},
        {
          name: 'Zdeletemsg <number>',
          value: 'Deletes messages given length.',
          inline: true
        },
        {name: 'Fun Commands', value: '\u200B'},
        {
          name: 'Zrandomprint',
          value: 'Shows a random object for 3D Printing',
          inline: true
        },
        {
          name: 'Zcoding',
          value: 'Sends random coding gif.',
          inline: true
        }
      )
      .setTimestamp()
      .setFooter(
        "Let's print something!",
        'https://zaxe.com/wp-content/uploads/2021/08/cropped-cropped-xdesktop_icon.png'
      )

    message.reply(embed)
  }
}
