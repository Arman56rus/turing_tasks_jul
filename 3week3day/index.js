// let a = 0
// while (a < 10){
//     console.log(a)
//     a++
// }
//
// let a1 = 0
// do {
//     console.log(a1)
//     a1++
// } while (a1 < 10)
//
// for (let a2 = 0; a2 < 10; a2++){
//     console.log(a2)
// }

// while (prompt("") !== "завершить"){
// }

// let aSwitch = "Hello"
// switch (aSwitch){
//     case 11:
//         console.log("number");
//         break
//     case "Hello":
//         console.log("string")
//         break
//     case {a:1}:
//         console.log("object")
//         break
//     case null:
//         console.log("null")
//         break
//     case false:
//         console.log("false")
//         break
//     default:
//         console.log("Значения отсутствуют")
// }

// let a = 2
// let b = 3
//
// let c = a
//     a = b
//     b = c
// console.log(a,b)

// function rounding(num){
//     console.log(Math.round(num * 100) / 100)
// }
// rounding(143.2356)
//
// function rounding1(num1){
//     console.log(num1.toFixed(1))
// }
// rounding1(42.2654)

// let a = "i learn JavaScript"
//
// let i = a.indexOf("JavaScript")
//
// console.log(i)

// function createCounter(){
//     let count = 0
//     return function (){
//         count = count + 1
//         return count
//     }
// }
//
// let firstCounter = createCounter()
// let secondCounter = createCounter()
//
// console.log(firstCounter())
// console.log(firstCounter())
// console.log(secondCounter())
// console.log(secondCounter())



// function squarePow(num,callback){
//     const a = callback()
//     const b = callback(num)
// }
// console.log(squarePow(5,() => {num * num}))

// const user = {
//     name: "Arman"
//     sayHello: function () {
//         console.log("Hello i am" {this.name})
//     }
// }
// const a = user.sayHello
// a.call(user)
//
// function sumNum (a, b){
//     return a + b;
// }
// sumNum(2,3)
//
// let result = curry(sumNum)
// console.log(result(1)(4))