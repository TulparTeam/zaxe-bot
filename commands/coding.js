const fetch = require('cross-fetch')

module.exports = {
  name: 'coding',
  description: 'this code sends coding gifs.',

  execute(message, args) {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_APIKEY}&q=coding`
    )
      .then((res) => res.json())
      .then((data) => {
        let randomizer = parseInt(Math.floor(Math.random() * 45))
        console.log(randomizer)
        message.channel.send(data.data[randomizer].url)
      })
  }
}
//https://api.giphy.com/v1/gifs/random?api_key=hGRD0U2gKuXmSUkp4iTGwjx3VrRv4tWm&tag=code&rating=pg-13 GIPHY RANDOM
