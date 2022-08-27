const numbers = [2, 4, 3, 5, 55, 24, 69, 42]
const cheap = numbers.find( Number => Number < 3)
console.log(cheap)

const products = [
    {id:1, name: 'laptop', price: 36000},
    {id:1, name: 'Mobile', price: 15000},
    {id:1, name: 'Camera', price: 55000}
]

const bigPrice = products.find(product => product.price > 30000)
console.log(bigPrice)