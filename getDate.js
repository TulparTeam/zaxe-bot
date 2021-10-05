const sendDate = () => {
  const dateConst = new Date()
  let nowDay = Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(
    dateConst.getDay()
  )
  let nowMonth = Intl.DateTimeFormat('en-US', {month: 'long'}).format(
    dateConst.getMonth()
  )
  let nowHours = dateConst.getHours()
  let nowMinutes = dateConst.getMinutes()

  return `[ DATE ] :  ${nowHours}:${nowMinutes}  |  ${nowDay} / ${nowMonth}`
}

exports.sendDate = sendDate
