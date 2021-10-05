const sendDate = () => {
  const dateConst = new Date()
  console.log(dateConst)
  let nowDayNC = parseInt(dateConst.getDay()).toString()
  let nowMonthNC = parseInt(dateConst.getMonth()).toString()
  console.log(nowDayNC, nowMonthNC)
  let nowDay = Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(dateConst)
  let nowMonth = Intl.DateTimeFormat('en-US', {month: 'long'}).format(dateConst)
  let nowHours = dateConst.getHours()
  let nowMinutes = dateConst.getMinutes()

  return `[ DATE ] :  ${nowHours}:${nowMinutes}  |  ${nowDay} / ${nowMonth}`
}

exports.sendDate = sendDate
