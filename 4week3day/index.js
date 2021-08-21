// let searchTime = document.getElementById(`time`)
// function  getCurrentTimeString(){
//     return new Date().toTimeString().replace(/ .*/, ``)
// }
// setInterval(
//     () => searchTime.innerHTML = getCurrentTimeString(),1000
// )
//
// let searchShowSec = document.getElementById(`showSecond`)
// function getSecondsToTomorrow() {
//     let now = new Date();
//
//     let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
//
//     let diff = tomorrow - now;
//     return Math.round(diff/1000)}
//
// setInterval(
//         () => searchShowSec.innerHTML = getSecondsToTomorrow(),1000
//     )

// let searchInput = document.getElementById(`addNum`)
// let searchButton = document.getElementById(`startTimer`)
//     let getValue = searchInput.value
//     let intervalFunction = () => {
//         if (getValue === 0) {
//             clearInterval(getValue)
//         }
//         return getValue--;
//     }
//   let funcForAddEvent = () => {
//     setInterval(intervalFunction,1000)
// }
//
//
// searchButton.addEventListener(`click`, funcForAddEvent)
//Не разобрался, как реализовать это задание
//
// function returnNumber(numFirst, numSecond){
//     return Math.floor(Math.random() * (numSecond - numFirst) + numFirst)
// }
// console.log(returnNumber(2,10))

// let textBefore = `The text before promise`
// console.log(textBefore)
//
// let textAfter = new Promise(function (resolve,reject){
//     setTimeout(() => {
//         resolve(textBefore = `The text after promise`)
//     },3000)
// })
//
// textAfter.then(function (){
//     console.log(textBefore)
// })

// let numBefore = 2
// console.log(numBefore)
//
// let numAfter = new Promise(function (resolve,reject){
//     setTimeout(() => {
//         reject(numBefore = 3)
//     },3000)
// })
//
// numAfter.then(function (){
//     console.log(numBefore)
// })

// let num = Math.floor(Math.random()*20)
//
// // console.log(num)
// function containPromise(){
//     return new Promise((resolve, reject) => {
//         if (num > 10) {
//             reject({Error: `number more than 10 `})
//         } else {
//             resolve({Message: `number smaller than 10`})
//         }
//     })
// }
// containPromise()
//     .then(console.log)
//     .catch(console.log)

// let numArray = [2,3,4,5,6,7,8,9]
//
// function showEvenNumbers (){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             reject({newNumArray: numArray.filter(x => x%2 === 0)})
//         },1000)
//     })
// }
// showEvenNumbers().catch(console.log)
//
// function showSumNumbers (){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject({newNumArray: numArray.reduce((total, value)=>{
//                 return total+value
//             },0)
//         })
//     },3000)
// })
//
// }
// showSumNumbers().catch(console.log)

// let numArray = [2,3,4,5,6,7,8,9]

// async function showEvenNumbers (){
//     return await new Promise((resolve, reject) => () => {
//         reject({
//             newNumArray: numArray.filter(x => x % 2 === 0)
//         })
//     })
// }
//
// async function showSumNumbers (){
//     return await new Promise((resolve, reject) => () => {
//         reject({
//             newNumArray: numArray.reduce((total, value) => {
//                 return total + value
//             })
//         })
//     })
// }
// async function go(){
//     let a = await showEvenNumbers()
//     console.log(a)
//     let b = await showSumNumbers()
//     console.log(b)
// }
// go().then()
// Не удалось верно решить это задание

// let isError = false
//
// const somePromise = new Promise((resolve, reject) => {
//     if (isError === true){
//         resolve({resultNum: 123})
//     } else {
//         reject({errorText: `new error append`})
//     }
// })
// somePromise
//     .then(result => console.log(`result: `, result))
//     .catch(error => console.log(`error handled: `, error))
//     .finally(final => console.log(`finally data: `, final))

let promiseArray = Promise.all([
    new Promise(resolve => setTimeout(()=>resolve(3),3000)),
    new Promise(resolve => setTimeout(()=>resolve(2),2000)),
    new Promise(resolve => setTimeout(()=>resolve(1),1000))
])
let newPromiseArray = Promise.race([
    new Promise(resolve => setTimeout(()=>resolve(3),3000)),
    new Promise(resolve => setTimeout(()=>resolve(2),2000)),
    new Promise(resolve => setTimeout(()=>resolve(1),1000))
])

promiseArray
            .then(result => console.log(result))
newPromiseArray
            .then(result => console.log(result))
