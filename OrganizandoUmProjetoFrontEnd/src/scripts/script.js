const data = [
    {
        name:'Caderno',
        image:'./src/img/product.jpg',
        price:'R$50,00',
        off: 10
    },
    {
        name:'Livro',
        image:'./src/img/product.jpg',
        price:'R$80,00',
        off: 20
    },{
        name:'Apontador',
        image:'./src/img/product.jpg',
        price:'R$5,00',
        off: 30
    },{
        name:'Lápis',
        image:'./src/img/product.jpg',
        price:'R$2,50',
        off: 0
    },{
        name:'Tesoura',
        image:'./src/img/product.jpg',
        price:'R$6,00',
        off: 10
    },{
        name:'Canetinhas',
        image:'./src/img/product.jpg',
        price:'R$15,00',
        off: 50
    },{
        name:'Estojo',
        image:'./src/img/product.jpg',
        price:'R$25,00',
        off: 0
    },{
        name:'Régua',
        image:'./src/img/product.jpg',
        price:'R$5,00',
        off: 0
    },{
        name:'Mochila',
        image:'./src/img/product.jpg',
        price:'R$250,00',
        off: 20
    },{
        name:'Giz de Cera',
        image:'./src/img/product.jpg',
        price:'R$18,00',
        off: 80
    },
]

function createCard(obj){
    const div = document.createElement('div')
    const title = document.createElement('h2')
    const img = document.createElement('img')
    const price = document.createElement('p')
    const off = document.createElement('p')

    div.className = 'card'
    title.innerText = obj.name
    img.src = obj.image
    price.innerText = obj.price
    off.innerText = `Sale ${obj.off}% off`

    if(obj.off > 0){
        off.className = 'saleOff'
    }else{
        off.className = 'saleNone'
    }

    div.append(title, img, price, off)

    return div
}
