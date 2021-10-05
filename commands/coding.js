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
        message.channel.send(data.data[randomizer].url).then(() => {
          console.log(
            `\n\n\n[ RUN ] > Send Coding Gif\nGif ID : ${randomizer} \nGif URL : ${data.data[randomizer].url}\nUsername : ${message.author.username}\nUser ID : ${message.author.id}`
          )
        })
      })
  }
}
//https://api.giphy.com/v1/gifs/random?tag=code&rating=pg-13 GIPHY RANDOM
