module.exports = {
  name: 'randomprint',
  description: 'This command sends random prints.',
  async execute(message, args) {
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
      },
      {
        name: 'Spiral Cube',
        url: 'https://www.thingiverse.com/thing:2251743'
      },
      {
        name: 'Fidget Star',
        url: 'https://www.thingiverse.com/thing:4887861'
      },
      {
        name: 'Penholder',
        url: 'https://www.thingiverse.com/thing:271353'
      },
      {
        name: 'Lattice Cube',
        url: 'https://www.thingiverse.com/thing:2522147'
      },
      {
        name: 'Desk Ornaments',
        url: 'https://www.thingiverse.com/thing:75045'
      },
      {
        name: 'Air Stand 2.0',
        url: 'https://www.thingiverse.com/thing:269844'
      },
      {
        name: 'Dial Caliper',
        url: 'https://www.thingiverse.com/thing:831597'
      }
    ]
    const emojiList = ['tada', 'confetti_ball', 'sparkles', 'piñata']

    let randomizer
    let emojiRandomizer
    randomizer = Math.floor(Math.random() * prints.length)
    emojiRandomizer = Math.floor(Math.random() * emojiList.length)
    let randomPrint = prints[randomizer]
    let randomEmoji = emojiList[emojiRandomizer]
    console.log(randomizer, emojiRandomizer)
    console.log(message)
    await message.channel
      .send(`**${randomPrint.name}** :${randomEmoji}:\n${randomPrint.url}`)
      .then(() => {
        console.log(
          `\n\n\n[ RUN ] > Send Random Print\nPrint NAME : ${randomPrint.name} \nPrint URL : ${randomPrint.url}\nUsername : ${message.author.username}\nUser ID : ${message.author.id}`
        )
      })
  }
}
