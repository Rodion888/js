// switch case

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

// num(100)

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

// string(5)

// functions

function checkAge(age) {
  return age > 18 ? true : console.log('hello')
}

function checkAge(age) {
  return age > 18 || console.log('hello')
}

// checkAge(5)

function min(a, b) {
  return a < b ? console.log(a) : console.log(b)
}

// min(2, 5)
// min(3, -1)
// min(1, 1)

function pow(number, n) {
  return console.log(number ** n)
}

pow(3, 2)
pow(3, 3)
pow(1, 100)
