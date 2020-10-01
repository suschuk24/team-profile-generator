// npm tools
const fs = require('fs')
const inquirer = require('inquirer')

// constructor function files
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

const generatePage = require('./src/page-template')
const { writeFile, copyFile } = require('./generate-site')

const employeeList = []

function managerInfo() {
    inquirer
      .prompt([
          {
              type: 'input',
              name: 'name',
              message: "Please enter an Employee's Name (Start with Manager)",
              validate: (nameInput) => {
                  if(nameInput) {
                      return true;
                  } else {
                      console.log('You cannot leave this field blank')
                      return false
                  }
              },
          },
          {
              type: 'input',
              name: 'id',
              message: "Enter the Manager's ID number",
              validate: (IDInput) => {
                if(IDInput) {
                    return true;
                } else {
                    console.log('You cannot leave this field blank')
                    return false
                }
            },
          },
          {
              type: 'list',
              name: 'role',
              message: "Confirm Manager's Role",
              choices: [Manager]
          },
          {
              type: 'input',
              name: 'email',
              message: "Enter the manager's email address",
              validate: (emailInput) => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('You cannot leave this field blank')
                    return false
                }
              },
          },
          {
              type: 'input',
              name: 'officeNum',
              message: "Enter the Manager's office number",
              validate: (officeNumInput) => {
                if(officeNumInput) {
                    return true;
                } else {
                    console.log('You cannot leave this field blank')
                    return false
                }
            }
          },
      ])
      .then((answers) => {
          const manager = new Manager(
              answers.name,
              answers.id,
              answers.role,
              answers.email,
              answers.officeNum
          );
          employeeList.push(manager);
          console.log([answers])
      })
}

managerInfo()