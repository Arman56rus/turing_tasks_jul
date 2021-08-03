const money = 120000

const obj = {
    name: "Dmitriy",
    money,
}

obj["name-$*long"] = "Dmitriy Zolotukhin"
obj.newKey = 123

// console.log({obj})
// console.log(obj.money)

obj.money = 123


// console.log("value:", obj.testKey)
//
// if (obj.test === undefined){
//     console.log("It is undefined")
// }

// console.log("test" in obj)

// for (let key in obj) {
//     console.log("key:", key, "value:", obj[key])
// }

const newObj = {}

for (let key in obj) {
    newObj[key] = obj[key]
}

newObj.money = 0

newObj.KeyMoney = 1000000

newObj.newTestKeyAfterCopy = "new value"

obj.keyMoney = 9999999

// console.log({obj, newObj})

// console.log(obj)
// console.log({obj})
// console.log({...obj})
// console.log({name: obj.name, money: obj.money })

const newSpreadObj = {...obj, newKey1: 123, name: "new Name"}

console.log({newSpreadObj})
// newSpreadObj.name = "new external name"

// console.log({obj, newObj, newSpreadObj})


// const result = JSON.stringify(obj)
const resultObj = JSON.parse(JSON.stringify(obj))

console.log(resultObj.name)
console.log({obj})