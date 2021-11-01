let initInput = document.querySelector('.initInput')
let healthInput = document.querySelector('.healthInput')
let nameInput = document.querySelector('.nameInput')
let submitButton = document.querySelector('.submitButton')


function createHTMLEl(event){
    event.preventDefault()
    let containter = document.querySelector('.container')
    let initBox = document.createElement('p')
    let healthBox = document.createElement('p')
    let nameBox = document.createElement('p')
    initBox.innerText = `Initiative: ${initInput.value}`
    healthBox.innerText = `Health: ${healthInput.value}`
    nameBox.innerText = `Name: ${nameInput.value} `
    containter.append(initBox, healthBox, nameBox)
    console.log(healthInput.value, nameInput.value, initInput.value)
    console.log(initBox, healthBox, nameBox)
    function sortByInit(initBox){
        
    }
}




document
.addEventListener('submit', createHTMLEl)