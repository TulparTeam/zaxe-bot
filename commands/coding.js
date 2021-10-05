const fetch = require('cross-fetch')

module.exports = {
  name: 'coding',
  description: 'This commands is for sendin coding gifs.',

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
//https://api.giphy.com/v1/gifs/random?tag=code&rating=pg-13 GIPHY RANDOM
