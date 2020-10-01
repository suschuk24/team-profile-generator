const Employee = require('../lib/Employee')

class Intern extends Employee {
    constructor(name, id, role, email, school) {
        super(name, id, role, email)
       
        this.school = school;
    }
    getSchool() {

    };
 }

 module.exports = Intern;