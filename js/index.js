// Конструкция "switch"

const num = () => {
  const number = 2

  switch (number) {
    case 0:
      console.log('Вы ввели число 0')
    case 1:
      console.log('Вы ввели число 1')
    case 2:
    case 3:
      console.log('Вы ввели число 2, а может и 3')
      break
    default:
      console.log('We hope that this page looks ok!')
  }
}

const string = () => {
  const browser = 'Safari'

  if (browser == 'Edge') {
    return console.log("You've got the Edge!")
  }
  if (
    browser == 'Chrome' ||
    browser == 'Firefox' ||
    browser == 'Safari' ||
    browser == 'Opera'
  ) {
    return console.log('Okay we support these browsers too')
  } else {
    return console.log('We hope that this page looks ok!')
  }
}
window.addEventListener('load', num)
