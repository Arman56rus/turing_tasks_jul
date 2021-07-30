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

console.log({resultCondition1, resultCondition2})

if (20 < 30) {
    console.log("impossible!")
}
else {
    console.log("right!")
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
        console.log("My name is Anna");
        break;
    case "Dmitriy":
        console.log("My name is Dmitriy");
        break;
    case "Roman":
        console.log("My name is Roman");
        break;
    default: console.log("No name found")
        break;
}









// console.log(number)

console.log("123123123")