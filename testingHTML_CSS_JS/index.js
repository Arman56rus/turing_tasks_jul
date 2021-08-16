const searchClass = document.querySelector(`.addRow`)

function addRow (){
    const searchTable = document.querySelector(`.container_table`)
    const searchTr = document.querySelector(`.container_cell`)
    const newTr = searchTr.cloneNode(true)

    searchTable.appendChild(newTr)

}

searchClass.addEventListener(`click`, addRow)