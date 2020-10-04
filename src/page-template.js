const generateCards = (employeeListArr) => {
    //empty array to store employee cards
    let employeeCards = [];
  
    //create a loop to add employee cards to the empyy array
    for (let i = 0; i < employeeListArr.length; i++) {
      employeeRole = employeeListArr[i].role;
  
    //Variables to interject general dynamic elements for every employee type
      let cardName = `
      
      <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${employeeListArr[i].name}</div>
        `;
  
      let cardDetails = `
      <div class="card-body text-info">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Employee ID: ${employeeListArr[i].id}</li>
          <li class="list-group-item">
            Email: <a href="mailto:${employeeListArr[i].email}">${employeeListArr[i].email}</a>
          </li>
      `;
  
      let cardClosing = `
            </ul>
          </div>
        </div>
    `;
      //Add specific elements by employee type
      if (employeeRole === "Manager") {
        employeeCards.push(`
          ${cardName}
          <h6 class="card-subtitle mb-2 text-white fas fa-mug-hot">${employeeListArr[i].role}</h6>
          ${cardDetails}
          <li class="list-group-item">Office Number: ${employeeListArr[i].officeNum} </li>
          ${cardClosing}
          <div class="card-group">
          `);
      } else if (employeeRole === "Engineer") {
        employeeCards.push(`
          ${cardName}
          <h6 class="card-subtitle mb-2 text-white fas fa-glasses">${employeeListArr[i].role}</h6>
          ${cardDetails}<li class="list-group-item">Github: <a href = 'https://www.github.com/${employeeListArr[i].github}' target= '_blank'> ${employeeListArr[i].github}</a> </li>
          ${cardClosing}
          `);
      } else if (employeeRole === "Intern") {
        employeeCards.push(`
          ${cardName}
          <h6 class="card-subtitle mb-2 text-white fas fa-user-graduate">
          ${employeeListArr[i].role}
          </h6>
          ${cardDetails}
          <li class="list-group-item">School: ${employeeListArr[i].school} </li>
          ${cardClosing}
          `);
      }
    }
  
    return employeeCards;
  };
  
  //final HTML Output
  const generatePage = (employeeListArr) => {
    return `
      <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Profile</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="style.css" />
    </head>
    <body>
      <header class="bg-dark">
        <h1>My Team</h1>
      </header>
      <main>
        ${generateCards(employeeListArr)}
        </div>
      </main>
    </body>
  </html>`;
  };
  
  module.exports = generatePage;