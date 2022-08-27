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

const findPs = user.address.PS
const findDistrict = user["address"]["District"]
console.log(findDistrict)