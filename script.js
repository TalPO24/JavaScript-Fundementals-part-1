/*
//* VALUES and VARIABELS

let js = "amazing";
// if (js === "amazing") alert("java script is fun");
console.log(40 + 8 + 23 - 10)

console.log("jonas")
console.log(23)

//* we assigned  a veriable (firstName) and declared that is equal to "jonas" (firstName = "jonas").
let firstName = "jonas"
console.log(firstName)



let javaScriptIsFun = true;
console.log(javaScriptIsFun)

// console.log(typeof true)
console.log(typeof javaScriptIsFun)
// console.log(typeof 23)
// console.log(typeof 'Jonas')



//* DATA TYPES

//* if we want to change the veriable we do it without "let" because let is already defined.
javaScriptIsFun = "YES!"
console.log(typeof javaScriptIsFun)

let year;
console.log(year)
console.log(typeof year)
year = 1991
console.log(typeof year)

console.log(typeof null)

let age = 30
age = 31

const birthYear = 1996
// birthYear = 1997
// const job;


var job = 'programmer'
job = 'teacher'

lastName = 'poris'
console.log(lastName)
*/


//* MATH OPERATORS
/*
const now = 2037
const ageTal = now - 1996
const ageSarah = now - 2018
console.log(ageTal, ageSarah)

console.log(ageTal * 2, ageTal / 10, 2 ** 3)
    //* 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Tal"
const lastName = "Poris"
console.log(firstName + " " + lastName)

//* ASSIGNMENT OPERATORS
let x = 10 + 5 //15
x += 10; // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--; // x = x - 1
console.log(x)


//* COMPARISON OPERATORS
console.log(ageTal > ageSarah) // >, <, >=, <=
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18
console.log(now - 196 > now - 2018)

const now = 2037
const ageTal = now - 1996
const ageSarah = now - 2018
console.log(now - 196 > now - 2018)

let x, y;
x = y = 25 - 10 - 5 // x = y = 10 , x = 10
console.log(x, y)

const averageAge = (ageTal + ageSarah) / 2
console.log(ageTal, ageSarah, averageAge)
*/




//* TK-1
/*
//  let country = "Israel";
//  let continent = "Middle East"
//  let population = 9000000

//  console.log(country)
//  console.log(continent)
//  console.log(population)

// const johnWeight = 92
// const johnHeight = 1.95

// const markWeight = 78
// const markHeight = 1.69

// const johnBmi = johnWeight / (johnHeight ** 2)
// const markBmi = markWeight / (markHeight ** 2)
// const markHigherBmi = markBmi > johnBmi
// console.log(markBmi, johnBmi, markHigherBmi)

const johnWeight = 85
const johnHeight = 1.76

const markWeight = 95
const markHeight = 1.88

const johnBmi = johnWeight / (johnHeight ** 2)
const markBmi = markWeight / (markHeight ** 2)
const markHigherBmi = markBmi > johnBmi
console.log(markBmi, johnBmi, markHigherBmi)
*/

//* STRINGS AND TEMPLATE LITERALS
/*
const firstName = 'Jonas'
const job = 'teacher!'
const birthYear = 1991;
const currentYear = 2023;


const jonas = "I'm " + firstName + ', a ' + (currentYear - birthYear) + " years old " + job
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}`
console.log(jonasNew)

console.log(`just a regular string...`)
*/


//* IF / ELSE STATEMENTS
/*
const age = 15;
const isOldEnough = age >= 18

if (isOldEnough) {
    console.log('sarah can start driving license🚗')
} else {
    const yearsLeft = 18 - age
    console.log(`sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 2021

let century;
if (birthYear <= 2000) {
    century = 20
} else {
    century = 21
}
console.log(century)
*/


//* TK-2
/*
const johnWeight = 85
const johnHeight = 1.76

const markWeight = 95
const markHeight = 1.88

const johnBmi = johnWeight / (johnHeight ** 2)
const markBmi = markWeight / (markHeight ** 2)


if (markBmi > johnBmi) {
    console.log(`Marks BMI ${markBmi} is higher then John's ${johnBmi}`)
} else {
    console.log(`John BMI ${johnBmi} is higher then Mark's BMI ${markBmi}`)
}
*/

//* TYPE CONVERSION 
/*
const inputYear = '1991'
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18)

console.log(Number('jonas')) // NAN = not a number
console.log(typeof NaN)
console.log(String(23), 23)


//* TYPE COERCION
console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - 3)
console.log('23' * '2')
*/


//* TRUTHY and FALSY VALUES
// 5 falsy values: 0,'', undefined, null, NaN
/*
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas'))
console.log(Boolean({}))
console.log(Boolean(''))

const money = 100
if (money) {
    console.log("Don't spend it all")
} else {
    console.log("you should get a job")
}

let height = 0
if (height) {
    console.log('YAY! Height is defined')
} else {
    console.log('Height is undefined')
}
*/


//* EQUALITY OPERATORS == VS ===
/*
const age = 18
if (age === 18)
    console.log("You just bacame an adult (strict)")
if (age == 18)
    console.log("You just bacame an adult(loose)")

const favourite = Number(prompt("what's your favourite number?"))
console.log(typeof favourite)

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number')
} else if (favourite === 7) {
    console.log(" 7 is also a cool number")
} else if (favourite === 9) {
    console.log(" 9 is also a cool number")
} else {
    console.log("number is not 23 or 7 or 9")
}

if (favourite !== 23) {
    console.log("Why not 23?")
}
*/

//* BOOLEAN
//* LOGICAL OPERATORS
/*
const hasDriversLicense = true //A
const hasGoodVision = true //B

console.log(hasDriversLicense && hasGoodVision) //* && - AND OPERATOR 
console.log(hasDriversLicense || hasGoodVision) //* || - OR OPERATOR
console.log(!hasDriversLicense) //* ! - NOT OPERATOR

// if (hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive")
// } else {
//     console.log("Someone else should drive...")
// }
const isTired = false // C
console.log(hasDriversLicense && hasGoodVision && isTired)
if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive")
} else {
    console.log("Someone else should drive...")
}
*/

//* TK-3
/*
//*1)
const avgDolphins = (96 + 108 + 89) / 3
const avgKoalas = (88 + 91 + 110) / 3
console.log(avgDolphins, avgKoalas)
if (avgDolphins > avgKoalas) {
    console.log(avgDolphins, "Dolphins wins!")
} else if (avgDolphins === avgKoalas) {
    console.log("it's a draw")
} else {
    console.log(avgKoalas, "Koalas wins!")
}

//*2) 
const minScore = 100
const avgDolphins = (97 + 112 + 101) / 3
const avgKoalas = (109 + 95 + 123) / 3
console.log(avgDolphins, avgKoalas)
if (avgDolphins >= minScore && avgDolphins > avgKoalas) {
    console.log(avgDolphins, "Dolphins wins!")
} else if (avgKoalas >= minScore && avgKoalas > avgDolphins) {
    console.log(avgKoalas, "Koalas wins!")
} else if (avgDolphins === avgKoalas) {
    console.log("it's a draw")
}

//*3)
const avgDolphins = (97 + 112 + 101) / 3
const avgKoalas = (109 + 95 + 106) / 3
console.log(avgDolphins, avgKoalas)
const minScore = 100
if (avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
    console.log("It's a draw")
} else {
    console.log("No team wins the trophy")
}
*/

//* THE SWITCH STATMENT
/*
const day = 'monday'
switch (day) {
    case 'monday': // day === monday
        console.log('plan course structure')
        console.log('Go to coding meetup')
        break;
    case 'tuesday':
        console.log('Prepare theory cideos')
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code exampels')
        break;
    case 'friday':
        console.log('Record videos')
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend')
        break;
    default:
        console.log("Not a valid week day")
}

if (day === "monday") {
    console.log('plan course structure')
    console.log('Go to coding meetup')
} else if (day === "tuesday") {
    console.log('Prepare theory videos')
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code exampels')
} else if (day === 'friday') {
    console.log('Record videos')
} else if (day === 'saturday' || day === 'sunday') {
    console.log('enjoy the weekend')
} else {
    console.log("Not a valid week day")
}
*/

//* STATEMENTS and EXPRESSIONS
//* expression produces a value
//* whenever somthing end with a semicolon (;) that's a statment 
/*
3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';  
}
console.log(`I'm ${2037 - 1991} years old`)
*/

//* THE CONDITIONAL (TERNARY) OPERATOR
//* it's calld ternary because it has three parts 
/*
const age = 23
    // age >= 18 ? console.log(`I like to drink wine`) : console.log(`I like to drink water`)

const drink = age >= 18 ? 'wine' : 'water'
console.log(drink)

let drink2
if (age >= 18) {
    drink2 = 'wine'
} else {
    drink2 = 'water'
}
console.log(drink2)

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)
*/

//* TK - 4
// const billValue = 275
// const billValue = 40
const billValue = 430
const tip = billValue >= 50 && billValue <= 300 ? (billValue * 15) / 100 : (billValue * 20) / 100
const totalValue = billValue + tip
console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${totalValue}`)