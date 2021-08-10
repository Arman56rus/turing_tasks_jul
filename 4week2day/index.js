// const worker = {
//     id: 12,
//     name:"Dmitriy",
//     work: () => {
//         console.log("I am worker")
//     },
//     rest: () => {
//         console.log("I am resting")
//     }
// }
//
// const remoteWorker = {
//     address: "Moscow, Kremlin"
// }
//
// // console.log({remoteWorker})
// // console.log(remoteWorker.name)
//
// remoteWorker.__proto__ = worker
//
// // console.log({remoteWorker})
// // console.log(remoteWorker.name)
//
//
// function foo() {
//     this.num = 10
// }
//
// foo.prototype = {
//     name: "John"
// }
//
// const fooObj = new foo()
//
// alert(fooObj)
//
// foo.prototype.toString = function objToString(){
//     return `obj transferred to string ${this.num}`
// }
//
// console.log(fooObj.toString())
//
// alert(fooObj)

class MyClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    set name(value){
        if (value.length < 5){
            console.log("Name is too short")
        } else {
            this._name = value
        }
    }

    get name(){
        return this._name
    }

    showDate(){
        console.log(`Data: ${this.name}, ${this.age}`)
    }
}

const myClassObject = new MyClass(`John`,25)
const myClassObject1 = new MyClass(`Dmitriy`,23)
const myClassObject2 = new MyClass(`Kate`,24)
const myClassObject3 = new MyClass(`Petr`,26)
myClassObject.showDate()
myClassObject1.showDate()
myClassObject2.showDate()
myClassObject3.showDate()

console.log("////////////////////////", myClassObject1._name)

myClassObject.name = "123"


