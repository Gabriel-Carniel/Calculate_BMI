// variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// const modalWrapper = document.querySelector(".modal-wrapper")
// const modalMessage = document.querySelector(".modal .title span")
// const modalBtnClose = document.querySelector('.modal button.close') 

const Modal = { // Object literal

  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector('.modal button.close'),

  open() { // O padrão seria escrever: open: function () {} / mas aceita essa forma mais curta  
    //modalWrapper.classList.add('open')
    Modal.wrapper.classList.add('open')
  },
  close() {
    //modalWrapper.classList.remove("open")
    Modal.wrapper.classList.remove("open")
  }
}

form.onsubmit = event => {

  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  // modalMessage.innerText = message
  Modal.message.innerText = message // Faz a mesma coisa que a linha acima por conta do atributo criado no objeto "Modal"

  // modalWrapper.classList.add('open')
  Modal.open() // Faz a mesma coisa que a linha acima por conta da função criada no objeto "Modal"
}

Modal.buttonClose.onclick = () => {
  // modalWrapper.classList.remove("open")
  Modal.close() // Faz a mesma coisa que a linha acima, por conta da funcão criada no objeto "Modal"
}

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}