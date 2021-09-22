// class Employee{
//     #name;
//     #age;
//     #salaryPerHour;
//     #hours;
//     constructor(name, age, salaryPerHour, hours) {
//         this.name = name
//         this.age = age
//         this.salaryPerHour = salaryPerHour
//         this.hours = hours
//     }
//     set dataUser(value){
//         [this.#name, this.#age, this.#salaryPerHour, this.#hours] = value.split("")
//     }
//     get dataUser(){
//         return  `${this.#name}, ${this.#age}, ${this.#salaryPerHour}, ${this.#hours}`
//     }
//     getSalary(){
//         console.log(`name: `+ this.name + `,` + ` salary: ` + this.salaryPerHour * this.hours)
//     }
//     getDataEmployee(){
//         console.log(`Data: ` + this.name + `, ` + this.age + `, ` + this.salaryPerHour * this.hours)
//     }
//
// }
// const employeeFirst = new Employee(`John`,32,10,7)
// const employeeSecond = new Employee(`Kate`,30,12,7)
// employeeFirst.getSalary()
// employeeSecond.getSalary()
// employeeFirst.getDataEmployee()

// class Numbers {
//     constructor(number) {
//         this.number = number
//     }
//
//     evenNumber() {
//         if (this.number % 2 === 0) {
//             return ('число четное')
//         } else {
//             return ('число нечетное')
//         }
//     }
//
//     integerNumber() {
//         if (this.number % 1 === 0) {
//             return ('число целое')
//         } else {
//             return ('число с плавающей точкой')
//         }
//     }
//
//     positiveNumber() {
//         if (this.number > 0) {
//             return ('число положительное')
//         } else if (this.number === 0) {
//             return ('число ноль')
//         } else {
//             return ('число отрицательное')
//         }
//     }
//
//     allFuncSummon() {
//         console.log(
//             this.evenNumber(),
//             this.integerNumber(),
//             this.positiveNumber()
//         )
//     }
// }
//
// const firstObj = new Numbers(-4.6)
// console.log(firstObj.allFuncSummon())

// class Strings{
//     constructor(string) {
//         this.string = string
//     }
//
//     toUpperWord(){
//         return this.string.split(/\s/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
//     }
//     toLowerWord(){
//         return this.string.split(/\s/).map(word => word[0].toLowerCase() + word.substring(1)).join(' ')
//     }
//     lengthWord(){
//         // console.log(this.string.split(/\s/).join('').length)
//         return this.string.split(/\s/).join('').length
//     }
//
// }
// const objString = new Strings("I Love You to")
// console.log(objString.lengthWord())


// class AccountingEmployee extends Employee{
//     constructor(name, age, salaryPerHour, hours) {
//         super(name, age, salaryPerHour, hours);
//     }
//     work(){
//         console.log(`${this.name} приступил к выполнению обязанностей`)
//     }
// }
// const employeeFirst1 = new AccountingEmployee(`Александр`)
// employeeFirst1.work()

class WorkingDOM {
    constructor(selector) {
        this.selector = selector
    }

    changeTextContent(){
        this.selector = document.querySelector('.javascript')
        console.log(this.selector.innerText = 'I love C++')
        return this
    }
    changeHTML(){
        this.selector = document.querySelector('.javascript')
        console.log(this.selector.outerHTML = '<div>I love PHP</div>')
        return this
    }
    createAppendChild(){
        this.selector = document.createElement('div')
        this.selector.innerHTML = 'Любишь кататься - люби и <b>саночки</b> возить'
        document.body.appendChild(this.selector)
        return this
    }
    addHTMLstart(){
        this.selector = document.querySelector('.javascript')
        this.selector.prepend(document.createElement('div').innerHTML='Hi, ')
        return this
    }
    addHTMLend(){
        this.selector = document.querySelector('.javascript')
        this.selector.append(document.createElement('div').innerHTML=' and other languages')
        return this
    }
    changeAttrib(){
        this.selector = document.querySelector('.javascript')
        this.selector.setAttribute('test', 123)
        console.log(this.selector.outerHTML)
        return this
    }
    removeElem(){
        this.selector = document.querySelector('.javascript').remove()
        return this
    }
    getChild(){
        this.selector = document.querySelector('.javascript').firstElementChild
        return this
    }
}

const objDom = new WorkingDOM()
objDom
    .changeTextContent()
    .changeHTML()
    .createAppendChild()
    .addHTMLstart()
    .addHTMLend()
    .changeAttrib()
    .removeElem()
    .getChild()