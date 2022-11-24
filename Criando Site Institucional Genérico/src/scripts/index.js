const buttonToToggleText = document.querySelectorAll('[data-btn]')
const textToShow = document.querySelectorAll('.to-toggle')

for (let i = 0; i < buttonToToggleText.length; i++) {
    buttonToToggleText[i].addEventListener('click', (e) =>{
        e.preventDefault()
        if (!textToShow[i].classList.contains('show-text')) {
            console.log('click')
        textToShow[i].classList.add('show-text')
        }
        else if (textToShow[i].classList.contains('show-text')) {
            textToShow[i].classList.add('hide-text')
            setTimeout(() => {
                textToShow[i].classList.remove('show-text', 'hide-text')
            }, 1000)
        }
    })
}

function showModal() {
    const body = document.querySelector('body')
    const openModal = document.querySelectorAll('.open__modal')
    for (let i = 0; i < openModal.length; i++) {
        openModal[i].addEventListener('click', (e) => {
            e.preventDefault()
            const modal = createModal()

            body.appendChild(modal)
            removeModal()
        }) 
    }

}

function createModal() {
    const section = document.createElement('section')
    const form = document.createElement('form')
    const div = document.createElement('div')
    const h2 = document.createElement('h2')
    const span = document.createElement('span')
    const p = document.createElement('p')
    const input = document.createElement('input')
    const button = document.createElement('button')

    section.classList.add('modal__container')
    form.classList.add('modal__box')
    div.classList.add('modal__title')
    span.classList.add('modal__close')

    h2.innerText = 'Cadastro'
    span.innerText = 'X'
    p.innerText = `Ipsum is simply dummy text of the printing and <br> typesetting industry. Lorem Ipsum has been the industry's <br> standard dummy text ever since the 1500s`
    input.placeholder = 'Digite email'
    button.innerText = 'Entrar na lista para próxima turma'

    section.append(form)
    form.append(div,p,input,button)
    div.append(h2,span)

    return section
}

function removeModal() {
    const removeModal = document.querySelector('.modal__close')
    const form = document.querySelector('.modal__box')
    const modal = document.querySelector('.modal__container')
    removeModal.addEventListener('click', () => {
       form.classList.add('modal__back')
        setTimeout(() => {
            modal.remove()
            form.classList.remove('modal__back')
        }, 300)
    })
}

showModal()

