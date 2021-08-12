// const searchTagClass = document.getElementsByClassName(`container`)
// const searchTagClass1 = document.querySelector(`container`)
//
// const searchTagId = document.getElementById(`main_container`)
// const searchTagId1 = document.querySelector(`main_container`)

// const tagDivClassCont = document.getElementById("main_container1")
//     tagDivClassCont.className = "container1"
// const tagDivClassCont1 = document.getElementById("main_container1")
// tagDivClassCont1.classList.add(("ok"))
// tagDivClassCont1.classList.toggle(("you"))
// tagDivClassCont1.classList.toggle(("ok"))
// console.log(tagDivClassCont1.classList)
// console.log(document.getElementById("main_container1"))
// console.log(document.getElementsByClassName(`ok`))

// const changeStyleDiv = document.getElementsByClassName(`pxWidth`)
// changeStyleDiv[0].style.width = `200px`;
// console.log(changeStyleDiv)
//
// const changeStyleDiv1 = document.getElementById(`pxWidth1`)
// changeStyleDiv1.style.width = `300px`;
// console.log(changeStyleDiv1)
//
// const addStyleList = document.getElementsByTagName(`ul`)
// addStyleList[0].classList.add((`list`))
// const addStyleListAddClass = document.getElementsByClassName(`list`)
// console.log(addStyleListAddClass)
// const addStyleListContent = addStyleListAddClass[0].innerHTML
// console.log(addStyleListContent)
// addStyleListAddClass[0].innerHTML =
//     "            <li>one</li>\n" +
//     "            <li class='point'>two</li>\n" +
//     "            <li>three</li>\n" +
//     "            <li class='point'>four</li>\n" +
//     "            <li>five</li>\n" +
//     "            <li class='point'>six</li>\n" +
//     "            <li>seven</li>\n" +
//     "            <li class='point'>eight</li>\n" +
//     "            <li>nine</li>\n" +
//     "            <li class='point'>ten</li>\n"
// console.log(addStyleListAddClass[0].innerHTML)
//
// const newList = document.getElementsByClassName(`point`)
// console.log(newList)
// newList[0].style.cssText = `background: gray;
//                              font-weight: bold;`;
// newList[1].style.cssText = `background: gray;
//                              font-weight: bold;`;
// newList[2].style.cssText = `background: gray;
//                              font-weight: bold;`;
// newList[3].style.cssText = `background: gray;
//                              font-weight: bold;`;
// newList[4].style.cssText = `background: gray;
//                              font-weight: bold;`;

// const inputId = document.getElementById(`forFunc`)
// console.log(inputId)
//
// const returnFunc =
//     function returnFunc(param){
//         return inputId
//     }
// returnFunc(inputId)

// const inputClass = document.getElementsByClassName(`forFunc`)
// console.log(inputClass)
// const inputForFunc = inputClass[0].outerHTML = `<input type="text" class="forFunc">`
//
// const noActive =
//     function noActiveFunc(param){
//         if (param === "forFunc"){
//             inputClass[0].outerHTML = `<input type="text" class="forFunc" disabled>`
//         } else inputClass[0].outerHTML = `<input type="text" class="forFunc">`
//     }
//
//     noActive("forFunc")

// const textElement = document.getElementsByClassName(`addSpan`)
// const newElement = document.createElement(`span`)
// newElement.innerText = `First span`
// textElement[0].prepend(newElement);
// textElement[0].insertAdjacentHTML(`beforeend`, `<span>Second span</span>`)
//
// const searchSpan = document.getElementById(`forFuncSpan`)
// const textElementContentText = searchSpan.textContent
// const textElementContentInner = searchSpan.innerHTML = `forFuncSpan`
//
// function getParamSpan (param1, param2){
//     console.log("Parameters were got: ", {textElementContentInner, textElementContentText})
// }
//
// getParamSpan({textElementContentText},{textElementContentInner})

// const searchChildElement = document.querySelector(`div > .child`)
// searchChildElement.style.color = `red`

// const searchElement = document.querySelector(`.list`)
// const childElement = searchElement.lastElementChild
// const signLastChild = `!!!`
// const addTextLastChild = childElement.append(signLastChild)
// console.log(searchElement)
//

// const assignmentNum = document.querySelector(`#check`)
//
// let counter = 0
//
// assignmentNum.textContent = counter
//
// assignmentNum.addEventListener(`click`, () => {
//     counter++
//     assignmentNum.textContent = counter
// })
// function alertScroll(){
//     alert(document.documentElement.scrollTop)
// }
// /
// window.addEventListener(`scroll`, alertScroll)

// const searchCell = document.getElementsByTagName(`td`)
// console.log(searchCell)
// searchCell[0].addEventListener(`click`, () =>{
//     const searchNum =  document.querySelector(`td`)
//     const translationNum = Number(searchNum.textContent)
//     const result = translationNum * translationNum
//     console.log(result)
// })
// searchCell[1].addEventListener(`click`, () =>{
//     const searchNum =  document.querySelector(`.one`)
//     const translationNum = Number(searchNum.textContent)
//     const result = translationNum * translationNum
//     console.log(result)
// })
// searchCell[2].addEventListener(`click`, () =>{
//     const searchNum =  document.querySelector(`.two`)
//     const translationNum = Number(searchNum.textContent)
//     const result = translationNum * translationNum
//     console.log(result)
// })
// searchCell[3].addEventListener(`click`, () =>{
//     const searchNum =  document.querySelector(`.three`)
//     const translationNum = Number(searchNum.textContent)
//     const result = translationNum * translationNum
//     console.log(result)
// })
// searchCell[4].addEventListener(`click`, () =>{
//     const searchNum =  document.querySelector(`.four`)
//     const translationNum = Number(searchNum.textContent)
//     const result = translationNum * translationNum
//     console.log(result)
// })
// searchCell[5].addEventListener(`click`, () =>{
//     const searchNum =  document.querySelector(`.five`)
//     const translationNum = Number(searchNum.textContent)
//     const result = translationNum * translationNum
//     console.log(result)
// })

const searchTable = document.querySelector(`#fivePowCol`)
    searchTable.addEventListener(`mouseover`,() =>{
        const searchTd = document.getElementsByTagName(`td`)
        searchTd.style.backgroundColor = `red`
    })

