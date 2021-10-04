const Discord = require('discord.js')
const client = new Discord.Client()
//const settings = require('./settings.json')
const fs = require('fs')
require('dotenv').config()
client.commands = new Discord.Collection()

const commandFiles = fs
  .readdirSync('./commands/')
  .filter((file) => file.endsWith('.js'))
for (const file of commandFiles) {
  const command = require(`./commands/${file}`)

  client.commands.set(command.name, command)
}

var prefix = process.env.PREFIX

client.on('ready', () => {
  console.log(`XYZ Calibrated! => ${client.user.tag}!`)
  client.user.setActivity({
    name: 'Zhelp | Zrandomprint | Zcoding',
    type: 'PLAYING',
    status: 'idle'
  })
})

client.on('message', (message) => {
  const args = message.content.slice(prefix.length).split(/ +/)
  const command = args.shift().toLowerCase()
  console.log(command)

  switch (command) {
    case 'website':
      client.commands.get('website').execute(message, args)
      break
    case 'ban':
      client.commands.get('ban').execute(message, args)
      break
    case 'help':
      client.commands.get('help').execute(message, args)
      break
    case 'deletemsg':
      client.commands.get('deletemsg').execute(message, args)
      break
    case 'randomprint':
      client.commands.get('randomprint').execute(message, args)
      break
    case 'coding':
      client.commands.get('coding').execute(message, args)
      break
    default:
      break
  }
})

client.login(process.env.TOKEN)
