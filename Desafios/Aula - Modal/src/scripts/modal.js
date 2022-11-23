const buttonsControllersModal = document.querySelectorAll("[data-control-modal]")
const modalId = document.querySelector('#enter')

for (let index = 0; index < buttonsControllersModal.length; index++){
    buttonsControllersModal[index].addEventListener("click", (e)=>{
        e.preventDefault()
        modalId.classList.add("show-modal")
    })
}

const boxModal = document.querySelector('.modal__box')
const buttonBack = document.querySelector('.btn__ok') 
buttonBack.addEventListener('click', (e)=> {
    e.preventDefault()
    modalId.classList.add('modal__back')
    if (modalId.classList.contains('show-modal')) {
        setTimeout(()=>{
            modalId.classList.remove("show-modal")
            modalId.classList.remove('modal__back')
        }, 800) 
    } 
})


// for(let index = 0; index < buttonsControllersModal.length; index++){
//     buttonsControllersModal[index].addEventListener("click", (e)=>{
//         e.preventDefault()
//         let modalId = buttonsControllersModal[index].getAttribute("data-control-modal")
//         document.getElementById(modalId).classList.toggle("show-modal")
//     })
// }