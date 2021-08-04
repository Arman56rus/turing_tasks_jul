// function show (num) {
//     console.log(arguments)
// }
// show(1,3,4,5,6,4)

// function comparison (numOne, numTwo){
//     if (numOne > numTwo){
//         return 1
//     } else if (numOne < numTwo){
//         return -1
//     } else if (numOne === numTwo){
//         return 0
//     }
// }
//
// let resultComparison = comparison(3,2)
//
// console.log(resultComparison)

// let sumNum = (numOne, numTwo) => numOne + numTwo
//
// console.log(sumNum(4,2))
//
//
// let sumNum1 = (numOne1, numTwo1) => numOne1 - numTwo1
//
// console.log(sumNum1(6,5))
//
//
// let sumNum2 = (numOne2, numTwo2) => numOne2 * numTwo2
//
// console.log(sumNum2(6,5))
//
//
// let sumNum3 = (numOne3, numTwo3) => numOne3 / numTwo3
//
// console.log(sumNum3(9,3))

// function greeting (name="гость"){
//    console.log("Здравствуйте, " + name)
// }
// greeting("Arman")
//
//
// function fib (n) {
//     if (n < 2){
//         return n
//     } else {
//         return fib(n-1) + fib(n-2)
//     }
// }
// console.log(fib(5))

function fib (n) {
    let a = 1
    let b = 1

    for (let i = 3; i <= n; i++)
    {
        let c = a + b
        a = b
        b = c
    }
    return b
}
console.log(fib(5))