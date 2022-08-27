// const numbers = [2, 4, 3, 5]
// function getSquare(number){
//     let output =[];
//     for(let number of numbers){
//         let square = squarIt(number)
//         output.push(square);
//     }
//     return output
// }

// // function squarIt(number){
// //     return number * number
// // }


// // purpose 
// // 1. get an array 
// // 2. for every elemtn of and array do something 
// // 3.store the result in Array. 
// // 4. return the result array 

// const squarIt = number => number * number;
// const result =getSquare();
// console.log(result)



// pracktice


/*
// problem 1

// make this array is even 
const numbers = [1, 3, 5, 7, 9]
const evemIt = numbers.map( number => number + 1);
console.log(evemIt)
*/


/*
// problem 2 and 3
// filer the elements that is divisible by 10
// use find method and compare it
const numbers = [33, 50, 79, 78, 90, 101,30]
const divideByTen = numbers.filter(n => n % 10 === 0)
const compareIt = numbers.find(n => n % 10 === 0)

console.log(divideByTen)
console.log(compareIt)
*/


/*
// problem 4
// find out output using for loop and reduce 
// const numbers = [1, 9, 7, 22]

function add(number){
    let output = 0;
    for(let number of numbers){
     output = output + number;
    
   
}
return output;
}

const result = add(numbers)

console.log(result)

// reduce 

const numbers = [1, 9, 7, 22]
const result = numbers.reduce((previous, current)=>{
    return previous + current;
},0)
console.log(result)

*/

// pracktice problem 1 reduce 
const peoples = [
    {name:'Meena', age: 20},
    {name:'Rina', age: 15},
    {name:'Suchorita', age: 22}
]

// function addAge(people){
//     let agep = 0;
// for(let people of peoples){
//     let findAge = peoples[0].age
//     agep =agep  + findAge;
//     console.log(agep)
// }
// return agep
// }

// const result = addAge(peoples);
// console.log(result)

// let total = 0;
// for( let i = 0; i<peoples.length; i++){
//     let findAge = peoples[i].age;
//     total = total + findAge
// }
// console.log(total)

// let student = {
//     name: 'kamal',
//     age: 20,
//     location :[
//         {
//             village:'Chilahati',
//             Ps:'Domar',
//             Dist:'Nilphamari'
//         }
//     ]
// }
// const findAge = student.age
// const findPs = student.location[0].Ps;
// console.log(findPs)
// console.log(findAge)


// chalenging pracktice 
const user ={
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  }
   
//   const Email = user.email
// //   console.log(Email)
// const address = user.address
// // console.log(address)
// const city = user.address.city
// // console.log(city)

// const lat = user.address.geo.lat
// // console.log(lat)

// const companyName = user.company.name
// console.log(companyName)

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);