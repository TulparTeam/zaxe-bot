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
  }
}
