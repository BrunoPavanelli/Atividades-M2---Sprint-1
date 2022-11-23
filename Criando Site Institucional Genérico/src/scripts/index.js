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