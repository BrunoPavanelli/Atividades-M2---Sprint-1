function mainRender(){
    const main = document.querySelector('main')

    main.id = 'products'

    for(let i = 0; i < data.length; i++){
        const card = createCard(data[i])
        main.appendChild(card)
    }
}

mainRender()