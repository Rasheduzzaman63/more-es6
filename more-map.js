const numbers = [6, 4, 8, 12, 9]
const half = numbers.map(x => x / 2)
console.log(half)


const friends = ['Sarwar', 'Abul Hossan Rana', 'Hakim', 'Rashed']
const fastLetter = friends.map(friend => friend[0])
const thirdLetter = friends.map(x => x[2])
const findLength = friends.map(friend => friend.length);


console.log(fastLetter)
console.log(thirdLetter)

console.log(findLength)


const products = [
    {id:1, name: 'laptop', price: 35000},
    {id:1, name: 'Mobile', price: 15000},
    {id:1, name: 'Camera', price: 55000}
]

const findName = products.map( product => product.name);
const findPrice = products.map(p => p.price)
console.log(findName)
console.log(findPrice)