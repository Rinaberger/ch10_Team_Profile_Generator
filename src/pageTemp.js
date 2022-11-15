const Employee = require("../lib/Employee");
const cardArr = [];

const createTeam = (team) => {
  const createManagerCard = (manager) => {
    return `
            <div class="card-body col-sm-12 col-md-4">
                <div style="box-shadow: 2px 2px 5px #000;">
                    <div class="card-header bg-dark text-white"">
                        <h3 class="card-title">${manager.getName()}</h3>
                        <h4 class="card-subtitle">Manager</h4>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email:<a href="${manager.getEmail()}"> ${manager.getEmail()}</a></li>
                        <li class="list-group-item">Phone Number: <a href="tel:${manager.getOfficeNumber}"> ${manager.getOfficeNumber()}</a></li>
                    </ul>
                </div>
            </div>
        `;
  };

  const createEngineerCard = (engineer) => {
    return `
        <div class="card-body col-sm-12 col-md-4">
            <div style="box-shadow: 2px 2px 5px #000;">
                <div class="card-header bg-dark text-white">
                    <h3 class="card-title">${engineer.getName()}</h3>
                    <h4 class="card-subtitle">${engineer.getRole()}</h4>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
        `;
  };

  const createInternCard = (intern) => {
    return `
        <div class="card-body col-sm-12 col-md-4">
            <div style="box-shadow: 2px 2px 5px #000;">
                <div class="card-header bg-dark text-white">
                    <h3 class="card-title">${intern.getName()}</h3>
                    <h4 class="card-subtitle">${intern.getRole()}</h4>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `;
  };

  cardArr.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => createManagerCard(manager))
  );

  cardArr.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => createEngineerCard(engineer))
  );

  cardArr.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => createInternCard(intern))
  );

  return cardArr.join("");
};

function renderPage(team) {
    return `
            <!DOCTYPE html>
            <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
            <title>Developer Team Profile</title>
        </head>
        <body style="background-color: beige;">
            <div class="row">
                <div class="bg-secondary col-12 jumbotron container text-center">
                    <h1 class="text-white">Developer Team</h1>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="d-flex justify-content-around" style="width: 80%;">
                    ${createTeam(team)}
                </div>
            </div>
        </body>
    `;
};

module.exports = { renderPage };