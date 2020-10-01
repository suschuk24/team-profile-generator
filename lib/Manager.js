const Employee = require('../lib/Employee')

class Manager extends Employee {
    constructor(name, id, role, email, officeNum) {
        super(name, id, role, email)
       
        this.officeNum = officeNum;
    }
    getSchool() {

    };
 }

 module.exports = Manager;