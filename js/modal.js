// Object literal
export const Modal = {  // Precisa de um servidor para funcionar*

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

Modal.buttonClose.onclick = () => {
  // modalWrapper.classList.remove("open")
  Modal.close() // Faz a mesma coisa que a linha acima, por conta da funcão criada no objeto "Modal"
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event){
  if (event.key === 'Escape'){
    Modal.close()
  }
}