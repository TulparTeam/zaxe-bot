const {sendDate} = require('../getDate.js')
module.exports = {
  name: 'ban',
  description: 'This commands is for banning a member.',
  execute(message, args) {
    if (message.member.roles.cache.has('801094458594557962')) {
      message.channel.send('Banlama Başarılı.')
    } else {
      message.reply(
        'Görünüşe göre bu komut için gerekli yetkiye sahip değilsin, bu komudu kullanamazsın.'
      )
    }

    console.log(
      `\n\n\n[ RUN ] > Ban \n|\n| Username : ${
        message.author.username
      }\n| User ID : ${message.author.id}\n|\n${sendDate()}`
    )
  }
}
