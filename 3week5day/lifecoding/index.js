const result = document.querySelectorAll("div")

const handleClick1 = () => {

    const newElement = document.createElement("div")

    newElement.innerText = "new js added text"
    newElement.style.color = "green"

    result[0].after(newElement)
}

const handleClick2 = () =>{
    console.log("12312312")
    result[0].classList.add("js_big_font")
    console.log("12312312")

}
const handleClick3 = () =>{
    result[0].style.margin = "50px"
}

const button = document.querySelector("#our_button")
console.log(button)
button.onclick = handleClick2

const button3 = document.querySelector("#our_button3")
button3.addEventListener("click", handleClick3)

