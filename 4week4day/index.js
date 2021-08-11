// const firstValue = localStorage.getItem(`firstValue`)
// const person = localStorage.getItem(`person`)
//
// const personObj = JSON.parse(person)
//
// console.log({personObj})
// console.log(personObj.id)
//
// console.log({person}, person.id, person[0], person[1],person[2],person[3], person[4])
//
// console.log(firstValue + 12)
//
// let test = 123
//
// test += 234
//
// console.log({test})
//
// const obj = {
//     id: 12,
//     name: "Petr"
// }
//
// localStorage.setItem(`person`, JSON.stringify(obj))
//
// localStorage.removeItem(`person`)
// localStorage.clear()
//
// sessionStorage.removeItem()

// for (let i = 0; i<15; i++){
//     console.log(i, `: `, Math.random())
// }

// const num = 0.51
//
// const num1 = 13.45
//
// console.log(Math.floor(num))
// console.log(Math.floor(num1))
//
// console.log(Math.ceil(num))
// console.log(Math.ceil(num1))
//
// console.log(Math.round(num))
// console.log(Math.round(num1))

// function generateNumber(num){
//     if (num <= 0) return 0
//     return Math.round(num * Math.random())
// }
//
// for (let i=0; i<20; i++){
//     console.log(i, `: `, generateNumber(i))
// }

const randomIntervalGenerate = (min, max) => {
    return Math.round((max - min) * Math.random() + min)
}

for (let i=0; i<50; i++){
    // console.log(i, `: `, randomIntervalGenerate(3, 10))
}

// const testOneReturn = () => {
//
// }

// function* generateNumber(maxNum){
//     for (let i=1; i <= maxNum;i++){
//         yield i
//     }
// }
//
// const generator = generateNumber(12)
// console.log({generator})
// console.log(`1: `, generator.next())
// console.log(`1: `, generator.next())
// console.log(`1: `, generator.next())
// console.log(`1: `, generator.next())
// console.log(`1: `, generator.next())
// console.log(`1: `, generator.next())
// console.log(`1: `, generator.next())
// console.log(`1: `, generator.next())
// console.log(`1: `, generator.next())

function* someGenerator(){
    const value = yield 42
    console.log({value})
    return "End"
}

const generator = someGenerator()

console.log(`First call: `, generator.next())
console.log(`Second call: `, generator.next(`I am string passed to generator`))
console.log(`Third call: `, generator.next(`I am string passed to generator`))
