// const button = document.querySelector(`button`)
//
// button.addEventListener(`click`, () => {
//     for (let i = 0; i < 10000; i++){
//         const someValue= i + 1;
//         const obj = { someValue }
//         console.log(obj)
//     }
//     alert(`I am alert after loop`)
// })
//
// const someArray = [`Hello`, "there", "general", "kawasaki"]
// someArray.forEach(word => console.log(word))

// const foo = (b) => {
//     const a = 12
//     return a + b
// }
//
// const bar = (x) => {
//     const someVar = 5
//     return foo (x + someVar)
// }

// console.log("before timeout console")
//
// setTimeout(() => console.log("set timeout function called"), 3000)
// //
// // for(let i = 0; i < 10000; i++){
// //     console.log({i})
// // }
//
// console.log("after timeout console")

let isError = false

const promise = new Promise((resolve, reject) => {
    if (isError) {
        reject({error: `New error appeared`})
    } else {
        resolve({id: `123`})
    }
}

// console.log(``)

//

// const rejectedPromise = new Promise((resolve, reject) =>
//    setTimeout(() => reject("Error 404"),3000)
// )
// console.log(`rejectedPromise`, rejectedPromise)

 // const pendingPromise = new Promise(
 //     resolve => setTimeout(() => resolve(42),5000)
 )
// console.log(`pendingPromise`, pendingPromise)

// pendingPromise
//     .then(result => {
//         console.log("first then")
//         return result + 10
//     })
//     .finally(() => console.log("Finally"))
//     .then(result => result > 50 ? console.log("Greater than 50",result) : console.log("Less that 50", result))

// rejectedPromise
//     .then(result => console.log("Result", result))
//     .then(null, error => console.log("Then error handing", error))
//     .catch(error => console.log("Catch error handing", error))
//     .finally(() => console.log("finally" + "////////////////////////"))

const fulfilledPromise = new Promise(resolve => resolve(42))
console.log(`fulfilledPromise`, fulfilledPromise)

const someFunction = async () => {
    const promiseResult = await new Promise(resolve => setTimeout(
      () => resolve("Hello World"), 3000))
    return promiseResult
}

const functionCallResult = someFunction()

console.log("functionCallResult: " functionCallResult)
