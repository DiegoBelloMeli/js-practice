let products = [

    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] }, { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] }, { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
    
    ]

// agregar id a los productos
const addId = (products) => {
    return products.map((product, i) => {
        return { ...product, id: i+1 }
    })
}
// imprimir en consola el nombre de cada uno de los productos.
const printName = (products) => {
    return products.map(product => product.name)
}

// producto con el id 3
const id3 = (products) => {
    return products.filter(product => product.id === 3)
}
//Imprimir en consola los productos con color “black”.

const productBlack = (products) => {
    return products.filter(product => product.colors.includes('black'))
}
// Imprimir en consola los productos que no tienen color.

const noColor = (products) => {
    return products.filter(product => product.colors.length === 0)
}    
// Agregar un producto nuevo al array con las mismas propiedades de los productos ya existentes.
const newProduct = (products) => {
    products.push({ name: 'Laptop', price: 1500, quantity: 40, colors: ['silver', 'black', 'white'] })
}

// Eliminar del array los productos fuera de stock.

const outStock = (products) => {
    const filtered = products.filter(product => product.quantity > 0)
    return filtered
}
//Imprimir en consola la sumatoria del stock de todos los productos.
const sumStock = (products) => {
    return products.reduce((acc, product)=> acc+product.quantity, 0)
}
//Imprimir los productos con un precio mayor a un importe determinado.
const priceGreater = (products, price) => {

    return products.filter(product => product.price > price)
}

console.log(priceGreater(products, 35))
