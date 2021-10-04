module.exports = {
  name: 'randomprint',
  description: 'This commands random prints.',
  execute(message, args) {
    const prints = [
      {
        name: 'Half Mask Skull',
        url: 'https://www.thingiverse.com/thing:4965226'
      },
      {
        name: 'Ornamental Bulbasaur',
        url: 'https://www.thingiverse.com/thing:4973828'
      },
      {name: 'Baby Groot', url: 'https://www.thingiverse.com/thing:2014307'},
      {
        name: 'Cute Mini Octopus',
        url: 'https://www.thingiverse.com/thing:3495390'
      },
      {
        name: 'Fillenium Falcon',
        url: 'https://www.thingiverse.com/thing:919475'
      },
      {
        name: 'Customazible Sanding Stick',
        url: 'https://www.thingiverse.com/thing:2404850'
      },
      ,
      {
        name: 'Flexi Rex',
        url: 'https://www.thingiverse.com/thing:2738211'
      },
      {
        name: 'Baby Yoda',
        url: 'https://www.thingiverse.com/thing:4038181'
      },
      {
        name: 'Jet Engine',
        url: 'https://www.thingiverse.com/thing:1327093'
      },
      {
        name: 'Eiffel Tower',
        url: 'https://www.thingiverse.com/thing:912478'
      },
      {
        name: 'Spiral Vase',
        url: 'https://www.thingiverse.com/thing:570288'
      }
    ]

    let randomizer = Math.floor(Math.random() * prints.length)
    let randomPrint = prints[randomizer]
    message.channel.send(`**${randomPrint.name}**\n${randomPrint.url}`)
  }
}
