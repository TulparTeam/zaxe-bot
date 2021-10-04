const Discord = require('discord.js')
const client = new Discord.Client()
const settings = require('./settings.json')
const fs = require('fs')

client.commands = new Discord.Collection()

const commandFiles = fs
  .readdirSync('./commands/')
  .filter((file) => file.endsWith('.js'))
for (const file of commandFiles) {
  const command = require(`./commands/${file}`)

  client.commands.set(command.name, command)
}

const roleFiles = fs
  .readdirSync('./roles/')
  .filter((file) => file.endsWith('.js'))
for (const file of roleFiles) {
  const command = require(`./roles/${file}`)

  client.commands.set(command.name, command)
}

var prefix = settings.prefix

client.on('ready', () => {
  console.log(`XYZ Calibrated! => ${client.user.tag}!`)
  client.user.setActivity({
    name: 'zaxe..',
    type: 'WATCHING'
  })
  client.user.setStatus({status: 'idle'})
})

client.on('message', (message) => {
  const args = message.content.slice(prefix.length).split(/ +/)
  const command = args.shift().toLowerCase()
  console.log(command)
  if (command === 'ping') {
    client.commands.get('ping').execute(message, args)
  } else if (command == 'website') {
    client.commands.get('website').execute(message, args)
  } else if (command == 'ban') {
    client.commands.get('ban').execute(message, args)
  } else if (command == 'help') {
    client.commands.get('help').execute(message, args)
  } else if (command == 'deletemsg') {
    client.commands.get('deletemsg').execute(message, args)
  } else if (command == 'randomprint') {
    client.commands.get('randomprint').execute(message, args)
  }
})

client.login(settings.token)
