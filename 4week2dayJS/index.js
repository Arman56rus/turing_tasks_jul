class Employee{
    #name;
    #age;
    #salaryPerHour;
    #hours;
    constructor(name, age, salaryPerHour, hours) {
        this.name = name
        this.#age = age
        this.#salaryPerHour = salaryPerHour
        this.#hours = hours
    }
    set dataUser(value){
        [this.#name, this.#age, this.#salaryPerHour, this.#hours] = value.split("")
    }
    get dataUser(){
        return  `${this.#name}, ${this.#age}, ${this.#salaryPerHour}, ${this.#hours}`
    }
    // getSalary(){
    //     console.log(`name: `+ this.name + `,` + ` salary: ` + this.salaryPerHour * this.hours)
    // }

    getDataEmployee(){
        console.log(`Data: ` + this.#name + `, ` + this.#age + `, ` + this.#salaryPerHour * this.#hours)
    }

}
// const employeeFirst = new Employee(`John`,32,10,7)
// const employeeSecond = new Employee(`Kate`,30,12,7)
// employeeFirst.getSalary()
// employeeSecond.getSalary()
// employeeFirst.getDataEmployee()

// class Numbers{
//     constructor(...number) {
//         this.number = number
//     }
//     set number(value){
//        value.map((elem) => elem%2 === 0 ? console.log(`Число четное`) : this._number = elem)
//     }
//     set number(value){
//        value.map((elem) => elem%1 === 0 ? console.log(`Число целое`) : this._number = elem)
//     }
//     set number(value){
//        value.map((elem) => elem>0 ? console.log(`Число положительное`) : elem === 0 ? console.log(`Число ноль`) : console.log(`Число отрицательное`))
//     }
//     get number(){
//         return this._number
//     }
//     showNumber(){
//         console.log(`Numbers: ${this.number}`)
//     }
// }
//
// const objNumOne = new Numbers(12,13,14,15.4, -2,0)
// objNumOne.showNumber()

class Strings{
    constructor(...string) {
        this.string = string
    }
    set string(value){
        const firstLetter = value[0].split(``)
        const upperCaseFirstLetter = firstLetter.map(function (firstLetter){
            return firstLetter.toUpperCase()
            //// не знаю, как сделать
            // заглавной первую букву в каждом слове через цикл for ()
        })
        // const deleteFirstLetter = firstLetter.splice(0,1)
        // firstLetter.splice(0,0,upperCaseFirstLetter)
        const toStringFirstLetter = upperCaseFirstLetter.join(``)
        value = toStringFirstLetter
        this._string = value
    }
    set string(value){
        const firstLetter = value[0].split(``)
        const upperCaseFirstLetter = firstLetter.map(function (firstLetter){
            return firstLetter.toLowerCase()
        })
        // const deleteFirstLetter = firstLetter.splice(0,1)
        // firstLetter.splice(0,0,upperCaseFirstLetter)
        const toStringFirstLetter = upperCaseFirstLetter.join(``)
        value = toStringFirstLetter
        this._string = value
    }
    get string(){
        return this._string
    }
    changeString(){
        console.log(`String: ${this.string}`)
    }
}
const objString = new Strings("i love you")
const objString1 = new Strings(`I LOVE YOU`)
objString.changeString()
objString1.changeString()

class AccountingEmployee extends Employee{
    work(){
        console.log(`${this.name} приступил к выполнению обязанностей`)
    }
}
const employeeFirst1 = new AccountingEmployee(`Александр`)
employeeFirst1.work()
