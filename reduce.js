
// redus for loop:
const numbers = [2, 4, 3, 5]
function getSquare(number){
    let output =[];
    for(let number of numbers){
        let square = squarIt(number)
        output.push(square);
    }
    return output
}

function squarIt(number){
    return number * number
}

// const numbers = [1, 2, 3, 4, 5, 6]
// .reduce(accumulation, initial)
// accumulation used two parameter

// const total = numbers.reduce((previous, current) => previous + current, 0) 
const total = numbers.reduce((privious, current) =>{
    return privious + current;
},0)

console.log(total)


// const user ={
//     id:5,
//     name:'Rashed',
//     address: {
//         Village: 'south Ketokibari',
//         Postoffice: 'Chilahati',
//         PS: 'Domar',
//         District:'Nilphamari'
//     }
// }
