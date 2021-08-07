const now = new Date()

// console.log({now})

const date1 = new Date(2017, 0, 10, 12)

// console.log({date1})
//
// console.log(date1.getFullYear())
// console.log(date1.getMonth())
// console.log(date1.getDate())
// console.log(date1.getHours())
// console.log(date1.getDay())
// console.log(date1.getTime())

const date2 = new Date(1484031600000)

// console.log({date2})
//
// console.log(date1.getTimezoneOffset())

const start = new Date()

for (let i = 0; i < 100000; i++){
    const doSmth = i*i*i
}

const end = new Date()

// console.log("Time of the loop:", end - start, "ms")

const options = {
    era: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
}

// console.log(end.toLocaleString("ru", options))

const date3 = new Date("2015-02-24T22:02")

console.log(date3.toLocaleString("ru", options))


const squarePow = (number, callback) => {
    const two = callback(number)
    const four = callback(two)
    return four
}

console.log(squarePow(4, (num) => num * num))