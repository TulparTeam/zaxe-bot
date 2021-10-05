const sendDate = () => {
  const dateConst = new Date()
  let nowDayNC = parseInt(dateConst.getDay()).toString()
  let nowMonthNC = parseInt(dateConst.getMonth()).toString()
  let nowDay = Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(dateConst)
  let nowMonth = Intl.DateTimeFormat('en-US', {month: 'long'}).format(dateConst)
  let nowHours = dateConst.getUTCHours()
  let nowMinutes = dateConst.getUTCMinutes()

  return `[ DATE ] :  ${nowHours}:${nowMinutes}  |  ${nowDay} / ${nowMonth}`
}

exports.sendDate = sendDate
