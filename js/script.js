// Precisa de um servidor para funcionar*
import { Modal } from "./modal.js" 
import { AlertError } from "./alert-error.js"
import { IMC, notANumber } from "./utils.js"

// variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// const modalWrapper = document.querySelector(".modal-wrapper")
// const modalMessage = document.querySelector(".modal .title span")
// const modalBtnClose = document.querySelector('.modal button.close') 


form.onsubmit = event => {

  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  if(notANumber(weight) || notANumber(height)){
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  // modalMessage.innerText = message
  Modal.message.innerText = message // Faz a mesma coisa que a linha acima por conta do atributo criado no objeto "Modal"

  // modalWrapper.classList.add('open')
  Modal.open() // Faz a mesma coisa que a linha acima por conta da função criada no objeto "Modal"
}

inputWeight.oninput = function(event) {
  AlertError.close()
}

inputHeight.oninput = function(event) {
  AlertError.close()
}



