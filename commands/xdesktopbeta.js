const Discord = require('discord.js')
const { sendDate } = require('../getDate.js')
const { MessageActionRow, MessageButton } = require('discord.js')
module.exports = {
  name: 'xdesktopbeta',
  description: 'This commands sends beta versions of xDekstop.',
  async execute(message, args) {
    const downloadWin = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel('Win | Beta | 2.2.0')
        .setStyle('LINK')
        .setURL('https://d.zaxe.com/xdesktopwinbeta')
    )
    const donwloadMac = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel('MacOs | Beta | 2.2.0')
        .setStyle('LINK')
        .setURL('https://d.zaxe.com/xdesktopmacbeta')
    )

    await message.channel
      .send({
        content:
          '> xDesktop Beta Update\n> Upgrade print profiles.\nEnjoy!\nHere is the beta links;',
        components: [downloadWin, donwloadMac]
      })
      .then(() => {
        console.log(
          `\n\n\n[ RUN ] > xDesktopBeta\n|\n| Username : ${
            message.author.username
          }\n| User ID : ${message.author.id}\n|\n${sendDate()}`
        )
      })
      .catch((err) => {
        console.log(
          `\n\n\n[ ERROR ] > xDesktopBeta\n|\n| Description : ${err}\n| Username : ${
            message.author.username
          }\n| User ID : ${message.author.id}\n|\n${sendDate()}`
        )
      })
  }
}
