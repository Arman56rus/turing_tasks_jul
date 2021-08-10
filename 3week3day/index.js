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
// function curry(f) {
//     return function(a) {
//         return function(b) {
//             return f(a, b);
//         };
//     };
// }
// function sumNum (a, b){
//     return a + b;
// }
// sumNum(2,3)
//
// let result = curry(sumNum)
// console.log(result(1)(5))
//
// let obj = {
//     a: "a",
//     b: "b",
//     c: "c"
// };
// console.log(obj["a"])
// console.log(obj.a)
//
// let obj = {
//     a:2,
//     b:"coding"
// };
//
// let copy1 = Object.assign({},obj)
// let copy2 = {...obj}
//
// console.log(copy1)
// console.log(copy2)

// let obj = {
//     a:4
// }
// obj.b = 5
// console.log(obj)
//
// delete obj.a
// console.log(obj)

// let obj = {
//
// }
// obj.name = "Иван"
// obj.lastName = "Иванов"
// obj.salary = 1000
// for (let key in obj){
//     console.log(key + ": " + obj[key])
// }

// let array1 = [0,1,2,3,4,5,6,7,8,9,10]
// for (let value of array1)
// console.log(value)
//
// let array2 = [0,1,2,3,4,5,6,7,8,9,10]
// for (let value1 in array2)
//     console.log(value1)
//
// function Animal(name, kind){
//     this.name = name
//     this.kind = kind
// }

// let strJS = "JavaSpring is language of programming, created in 1995"
//
// function sortedStr (){
//     let strNewJS = strJS.split("")
//     return strNewJS.sort()
// }
// console.log(sortedStr())


// let numJS = [9,8,7,6,5,4,3,2,86,42]
//
// function sortedNum(){
//     let numNewJS = numJS.sort()
//     return numNewJS
// }
// console.log(sortedNum())

// let arrayJS = [23,45,67,89,52,86]
//
// function searchReturnIndex (){
//     arrayJS.forEach(function (elem,index){
//         console.log(index,"===", elem)
//     })
// }
// searchReturnIndex()

// let twoDimensionalArr = [
//     [1,2,3,4],
//     [5,6,7,8]
// ]
// console.log(twoDimensionalArr[0])
// console.log(twoDimensionalArr[1])

// let obj = {
//     name: "Arman",
//     age: 26
// }
//
// let objNew = {
//
// }

// function copyObj (){
//     let objNew = Object.assign({}, obj)
//     return objNew
// }
// console.log(copyObj())

// function copyObj1 (){
//     for (let key in obj)
//         objNew[key] = obj[key]
//     return objNew
// }
//
// console.log(copyObj1())
//
// let someArray = [2,3,4,5,6,7,8]

// function sumArray(array){
//     let sum = 0
//     for (let i = 0; i < someArray.length; i++) {
//         sum += someArray[i]
//     }
//     console.log(sum)
// }


// let sum = 0
// let sumArray = (array) => {for (let i = 0; i < someArray.length; i++) {sum += someArray[i]} console.log(sum)}
//
// sumArray(someArray)

// let wear = {
//     fur: true
// };
//
// function Pullover(model){
//     this.model = model
//     this.warm = true
//     this.price = 1000
//     this.__proto__ = wear
// }
//

// let pullover = new Pullover("H&M")
//
// console.log(pullover.fur)
