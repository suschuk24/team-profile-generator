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

const managerInfo = () => {
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
          console.log(employeeList)
      })
}


const addEmployee = () => {
    console.log(`
    ======================
    Add a New Employee
    ======================
    `)
    inquirer
      .prompt([
          {
              type: 'input',
              name: 'name',
              message: "Please add an employee's name",
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
              message: "Enter the employee ID number",
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
              message: "Choose an Employee Category",
              choices: ['Engineer', 'Intern' ]
          },
          {
            type: 'input',
            name: 'email',
            message: "Enter the Employee's email address",
            validate: (emailInput) => {
              if(emailInput) {
                  return true;
              } else {
                  console.log('You cannot leave this field blank')
                  return false
              }
            },
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
                        validate: (githubInput) => {
                            if(githubInput) {
                                return true;
                            } else {
                                console.log('You cannot leave this field blank')
                                return false
                            }
                          },

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
                        validate: (internInput) => {
                            if(internInput) {
                                return true;
                            } else {
                                console.log('You cannot leave this field blank')
                                return false
                            }
                          },
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

const addAnotherEmployee = (team) => {
    inquirer
      .prompt([
          {
              type: 'confirm',
              name: 'addNewEmployee',
              message: 'Would you like to add another employee?',
              default: false
          },
      ])
      .then((employeeListArr) => {
          if(employeeListArr.addNewEmployee) {
              return addEmployee(employeeList)
          } if(!employeeListArr.addNewEmployee) {
            console.log(employeeList)  
            return employeeList
          }
      })
}
  
managerInfo()
// addEmployee()
//  addAnotherEmployee()
//   .then(addEmployee)
    // .then((employeeList) => {
    //     return generatePage(employeeList)
    // })
    // .then((HTML) => {
    //     return writeFile(HTML)
    // })
    // .then((writeFileResponse) => {
    //     console.log(writeFileResponse)
    //     return copyFile()
    // }) 
    // .then((copyFileResponse) => {
    //     console.log(copyFileResponse);
    //   })
    // .catch((err) => {
    //   console.log(err);
    // });