const Discord = require('discord.js')
const client = new Discord.Client({
  intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'DIRECT_MESSAGES']
})
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
    name: 'Zhelp | Zrandomprint',
    type: 'PLAYING',
    status: 'idle'
  })
})

client.on('messageCreate', async (message) => {
  const args = message.content.slice(prefix.length).split(/ +/)
  const command = args[0].toLowerCase()
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
    case 'updatelog':
      client.commands.get('updatelog').execute(message, args)
      break
  }
})

setInterval(() => {
  client.commands.get('waker_message').execute(client, args)
  console.log('Waked up.')
}, 900000)

client.on('error', (error) => {
  console.warn(error)
})

process.on('error', (error) => {
  console.warn(error)
})

client.login(process.env.TOKEN)
