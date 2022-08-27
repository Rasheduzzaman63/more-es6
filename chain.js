const users = [{id:1, name:'kamal', salary:12000},
    {id:5, name:'jamal', salary: 50000}
]
// 1: this is array
// 2: this {id:1, name:'kamal', salary:12000}, {id:5, name:'jamal', salary: 50000}object
// 2: first element {id:1, name:'kamal', salary:12000}


// console.log(users[1].salary)


const data ={
    count:20000,
    data : [
        {id:5, name:'raeesa' , age:3.6},
        {id:4, name:'ruman' , age:7}
    ]
}
// console.log(data.count)
// console.log(data.data[0].name)



const user ={
    id:5,
    name:'Rashed',
    address: {
        Village: 'south Ketokibari',
        Postoffice: 'Chilahati',
        PS: 'Domar',
        District:'Nilphamari'
    }
}
const findDistrict = user.address?.Distrit
console.log(findDistrict)