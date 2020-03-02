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

// pow(3, 2)
// pow(3, 3)
// pow(1, 100)

// arrow functions

const ask = (question, yes, no) => {
  if (confirm(question)) yes()
  else no()
}

// ask(
//   'Вы согласны?',
//   () => alert('Вы согласились.'),
//   () => alert('Вы отменили выполнение.')
// )

// objects

const user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name

// console.log({ user })

let schedule = {}

const isEmpty = schedule => {
  for (let key in schedule) {
    return false
  }
  return true
}

// console.log(isEmpty(schedule))

schedule['8:30'] = 'get up'

// console.log(isEmpty(schedule))

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}

const sum = salaries => {
  let result = 0
  for (let key in salaries) {
    result += salaries[key]
  }
  return result
}

// console.log(sum(salaries))

const menu = {
  width: 200,
  height: 300,
  title: 'My menu',
}

const multiplyNumeric = menu => {
  for (let key in menu) {
    if (typeof menu[key] === 'number') {
      menu[key] *= 2
    }
  }
}

// multiplyNumeric(menu)

// this

const calculator = {
  read() {
    this.firstValue = parseInt(prompt('prompt first value', 0))
    this.secondValue = parseInt(prompt('prompt second value', 0))
  },
  sum() {
    return this.firstValue + this.secondValue
  },
  mul() {
    return this.firstValue * this.secondValue
  },
}

// calculator.read()
// console.log(calculator.sum())
// console.log(calculator.mul())

let ladder = {
  step: 0,
  up() {
    this.step++
    return this
  },
  down() {
    this.step--
    return this
  },
  showStep: function() {
    console.log(this.step)
  },
}

// ladder
//   .up()
//   .up()
//   .down()
//   .showStep()
