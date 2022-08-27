const numbers = [2, 4, 3, 5, 55, 24, 69, 42]
const filterBig = numbers.filter(number => number > 30)
const evenNumber = numbers.filter(n => n % 2 == 0)
// console.log(filterBig)
// console.log(evenNumber)


const products = [
    {id:1, name: 'laptop', price: 36000},
    {id:1, name: 'Mobile', price: 15000},
    {id:1, name: 'Camera', price: 55000}
]

const lowest = products.filter(product => product.price > 20000)

console.log(lowest)
