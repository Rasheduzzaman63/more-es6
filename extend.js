// ********* my own********

class TeamMember{
    name;
    salary;
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }
    SupportCounter(time){
        console.log(`You can support from ${time}`)
    }
}
class EnrollmentOfficer extends TeamMember{
    Designation = 'Enrollment officer';
    work = 'Data Entry';
    constructor(name, salary){
        super(name, salary)
    }
    SupportCounter(time){
        console.log(`You can support from ${time}`)
    }

}

class Supervisor extends TeamMember{
    Designation = 'Enrollment officer';
    work = 'Data Entry';
    extra;
    constructor(name, salary, extra){
        super(name, salary)
        this.extra = extra;
    }
    SupportRoom(time){
        console.log(`You can support from ${time}`)
    }

}

// const baki = new Supervisor('baki', 28000, 'Support room');
// console.log(baki)
// const rana = new EnrollmentOfficer('Rana', 1200)
// console.log(rana)
const sarwar = new EnrollmentOfficer ('Sarwar', 20000)
console.log(sarwar)