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

// empty array to place user input for employees 
const employeeList = []

// validate function for required answers for future use
const validateFcn = input => {
    if(input) {
        return true;
    } else {
        console.log('You cannot leave this field blank');
    };
}

const managerInfo = () => {
    inquirer
    // Manager information questions
      .prompt([
          {
              type: 'input',
              name: 'name',
              message: "Please the Manager's Name (all fields are required)",
              validate: validateFcn
          },
          {
              type: 'input',
              name: 'id',
              message: "Enter the Manager's ID number",
              validate: validateFcn
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
              validate: validateFcn
          },
          {
              type: 'input',
              name: 'officeNum',
              message: "Enter the Manager's office number",
              validate: validateFcn
          },
      ])
    //   push answers to array
      .then((answers) => {
          const manager = new Manager(
              answers.name,
              answers.id,
              answers.role,
              answers.email,
              answers.officeNum
          );
          employeeList.push(manager);
          console.log(employeeList);
          addEmployee(employeeList)
      })
}


const addEmployee = () => {
    // Add new Intern or Engineer
    console.log(`
    ====================
     Add a New Employee
    ====================
    `)
    inquirer
      .prompt([
          {
              type: 'input',
              name: 'name',
              message: "Please add an employee's name",
              validate: validateFcn
          },
          {
              type: 'input',
              name: 'id',
              message: "Enter the employee ID number",
              validate: validateFcn
          },
          {
              type: 'list',
              name: 'role',
              message: "Choose an Employee Category",
              choices: ['Engineer', 'Intern' ]
          },
          {
            type: 'input',
            name: 'email',
            message: "Enter the Employee's email address",
            validate: validateFcn
        },
      ])
      .then((answers) => {
          if(answers.role === 'Engineer') {
              inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'github',
                        message: "Enter the engineer's github username",
                        validate: validateFcn
                    }
                ])
                .then((roleUpdate) => {
                    const engineer = new Engineer(
                      answers.name,
                      answers.id,
                      answers.role,
                      answers.email,
                      roleUpdate.github
                    );
                    employeeList.push(engineer)
                    console.log(employeeList)
                    addAnotherEmployee(employeeList)

                });
          } if (answers.role === 'Intern') {
              inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'school',
                        message: "Enter the intern's school name",
                        validate: validateFcn
                    }
                ])
                .then((roleUpdate) => {
                    const intern = new Intern(
                        answers.name,
                        answers.id,
                        answers.role,
                        answers.email,
                        roleUpdate.school
                      );
                      employeeList.push(intern)
                      console.log(employeeList)
                      addAnotherEmployee(employeeList)
                });
          }
      });
};

const addAnotherEmployee = () => {
    // question to either end application or add another employee
    inquirer
      .prompt([
          {
              type: 'confirm',
              name: 'addNewEmployee',
              message: 'Would you like to add another employee? ("No" will end the epplication and generate your page)',
              default: false
          },
      ])
      .then((employeeListArr) => {
 //   if user wants to add another employee, redirect to add employee
        if(employeeListArr.addNewEmployee) {
          return addEmployee(employeeList);
 // if the user is done, write the files
        } if (!employeeListArr.addNewEmployee) {
          console.log("All team members added!", employeeList);
          let pageHTML = generatePage(employeeList);
          writeFile(pageHTML)
            .then((writeFileResponse) => {
              console.log(writeFileResponse);
              return copyFile();
            })
            .then((copyFileResponse) => {
              console.log(copyFileResponse);
            });
        }
      });
  };

managerInfo(employeeList)
