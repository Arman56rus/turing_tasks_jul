let one=1;

let two=234;

let one_string = "1";

let two_string="2";

let isExist1 = one > two
let isExist2 = false

let result1 = null
let result2 = undefined

let result_empty

let house = {
    address:"Moscow, Red Square, 1",
    floors: 5,
    business: true
}

let car={
    seats:5,
    wheels:4,
    name:"lada"
}

let resultCondition1 = 20 >= 30
let resultCondition2 = "12312312" >= "23242342"

// console.log({resultCondition1, resultCondition2})

if (20 < 30) {
    // console.log("impossible!")
}
else {
    // console.log("right!")
}








let number = 5

while (number > 0) {
    // console.log({number})
    number = number - 1
}

console.log("///////")
number = 5

do {
    // console.log({number})
    number = number - 1
} while (number > 0)

const isRunning = false

for (let i = 3; i > 0; i--) {
    // console.log({i})
    if (!isRunning){
        break
    }
}

let condition = "sdfsdfd"

switch(condition) {
    case "Anna":
        // console.log("My name is Anna");
        break;
    case "Dmitriy":
        // console.log("My name is Dmitriy");
        break;
    case "Roman":
        // console.log("My name is Roman");
        break;
    // default: console.log("No name found")
        break;
}

let testInShow

// let stidents ={
//     user1: "Dmitriy",
//     user2: "Lena"
// }

let students = ["Dmitriy" , "Lena", "Petr", 'Vasya']

// console.log('array:', students[0], students[3], students.length, students.sort())


function show () {
    testInShow = true
    // console.log("show called", testInShow, condition)
}

function  arraySum(array) {
    const sumOld = array.reduce((accum, item) =>{
        accum + item
    }, 0)
    const sumNew = array.reduce((accum, item) => accum + item, 0)
    return sumNew
    // console.log({sum, color})
}

const result = arraySum([3,2,4,5,1,5,6])
console.log(result)

console.log(arraySum( [12,3234,5656,76,78,6]))





function superOld() {}

const actionOld = () => {}

const actionNew = (param1, param2) => {
    console.log({param1,param2})
}


//
// const factorial = (num) => {
//     if (typeof num === "number") {
//         if (num < 1) return 1
//         return num * factorial(num - 1)
//     } else {
//         return "Not a number"
//     }
// }

const factorial = (num) => {
    if (typeof num !== "number")  {
        return "Not a number"
    }
    if (num < 1) {
        return 1
    }
    return num * factorial(num - 1)
}

console.log(factorial(14))




const factorialCycle = (num) => {
    if (typeof num !== "number")  {
        return "Not a number"
    }
    let result = 1
    for (let i = 2; i <= num; i++) {
        result = result * i
    }
    return result
}
console.log( "factorialCycle:", factorialCycle(11) )

const param = "2423"
const param1 = true
const param2 = 1121

console.log(!!param, !!param1, !!param2)


