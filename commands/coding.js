const fetch = require('cross-fetch')
const {sendDate} = require('../getDate.js')
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
        message.channel
          .send(data.data[randomizer].url)
          .then(() => {
            console.log(
              `\n\n\n[ RUN ] > Send Coding Gif\n|\n| Gif ID : ${randomizer} \n| Gif URL : ${
                data.data[randomizer].url
              }\n| Username : ${message.author.username}\n| User ID : ${
                message.author.id
              }\n|\n${sendDate()}`
            )
          })
          .catch((err) => {
            console.log(
              `\n\n\n[ ERROR ] > Send Coding Gif\n|\n| Description : ${err}\n| Username : ${
                message.author.username
              }\n| User ID : ${message.author.id}\n|\n${sendDate()}`
            )
          })
      })
  }
}
//https://api.giphy.com/v1/gifs/random?tag=code&rating=pg-13 GIPHY RANDOM
