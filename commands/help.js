const Discord = require('discord.js')

module.exports = {
  name: 'help',
  description: 'this is shows commands , command.',
  execute(message, args) {
    const embed = new Discord.MessageEmbed()
      .setColor('#24C386')
      .setTitle('Tüm Komutlar')
      .setAuthor(
        'By Jaeger Software',
        'https://i.ibb.co/vLwFjC6/logotrans.png',
        'http://jaegersoftware.cf'
      )
      .setDescription('Daha ayrıntılı bilgi için; http://jaegersoftware.cf')
      .setThumbnail('https://i.ibb.co/vLwFjC6/logotrans.png')
      .addField('\u200B', '\u200B', true)

      .addFields(
        {name: 'Rol Komutları', value: '\u200B'},
        {name: 'jk-cpp', value: 'C++ rolü verir.', inline: true},
        {name: 'jk-c#', value: 'C# rolü verir.', inline: true},
        {name: 'jk-html', value: 'HTML rolü verir.', inline: true},
        {name: 'jk-js', value: 'Javascript rolü verir.', inline: true}
      )
      .setImage('https://i.ibb.co/vLwFjC6/logotrans.png')
      .setTimestamp()
      .setFooter('Happy Coding!', 'https://i.ibb.co/vLwFjC6/logotrans.png')

    message.reply(/* */)
  }
}
