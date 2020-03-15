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

// constructors

let constructorCalculator = new Calculator()

function Calculator() {
  this.read = function() {
    this.firstValue = parseInt(prompt('prompt first value', 0))
    this.secondValue = parseInt(prompt('prompt second value', 0))
  }
  this.sum = function() {
    return this.firstValue + this.secondValue
  }
  this.mul = function() {
    return this.firstValue * this.secondValue
  }
}

// calculator.read()

// console.log('Sum=' + calculator.sum())
// console.log('Mul=' + calculator.mul())

let accumulator = new Accumulator(1)

function Accumulator(value) {
  this.value = value
  this.read = function() {
    this.value += +prompt('prompt value', 0)
  }
}

// accumulator.read()
// accumulator.read()

// alert(accumulator.value)

// numbers

let sumCalculator = new SumCalculator()

function SumCalculator() {
  this.read = function() {
    this.firstValue = prompt('prompt first value', 0)
    this.secondValue = prompt('prompt second value', 0)
  }
  this.sum = function() {
    return +this.firstValue + +this.secondValue
  }
}

// sumCalculator.read()

// console.log('Sum=' + sumCalculator.sum())

function readNumber() {
  let num
  do {
    num = prompt('type number', 0)
  } while (!isFinite(num))
  if (num === null || num === '') return null
  return +num
}

// console.log(`Число: ${readNumber()}`)

const random = (firstNum, secondNum) =>
  Math.random() * (secondNum - firstNum) + firstNum

// console.log(random(1, 5))

const randomRounded = (firstNum, secondNum) =>
  Math.round(Math.random() * (secondNum - firstNum) + firstNum)

// console.log(randomRounded(1, 5))

// Strings

const ucFirst = string => {
  if (!string) return string
  return string[0].toUpperCase() + string.slice(1)
}

// console.log(ucFirst('вася') == 'Вася')

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:

const checkSpam = string => {
  const upperStr = string.toUpperCase()
  if (
    upperStr.indexOf('viagra'.toUpperCase()) != -1 ||
    upperStr.indexOf('XXX'.toUpperCase()) != -1
  )
    return true
}

const checkSpamWithIncludes = string => {
  const lowerStr = string.toLowerCase()
  if (lowerStr.includes('viagra') || lowerStr.includes('xxx')) return true
}

// console.log(checkSpam('buy ViAgRA now') == true)
// console.log(checkSpam('free xxxxx') == true)
// console.log(checkSpam('innocent rabbit') == false)

// console.log(checkSpamWithIncludes('buy ViAgRA now') == true)
// console.log(checkSpamWithIncludes('free xxxxx') == true)
// console.log(checkSpamWithIncludes('innocent rabbit') == false)

const truncate = (string, len) => {
  if (!string || len === 0) return ''
  if (len > string.length) return string
  return string.slice(0, len - 1) + '...'
}

// console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20))
// console.log(truncate('Всем привет!', 20))

const extractCurrencyValue = string => +string.slice(1)

console.log(extractCurrencyValue('$120') === 120)
