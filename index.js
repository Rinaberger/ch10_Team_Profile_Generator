const fs = require("fs");
const inquirer = require("inquirer");

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");

// const { renderPage } = require("./src/pageTemplate.js");

const teamArr = [];

const validateUserInput = (value) => {
  if (value != "") {
    return true;
  } else {
    return "No Data Inputted.";
  }
};

const generateTeam = () => {
  console.log("Create Team");
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is manager's name?",
        validate: validateUserInput,
      },
      {
        type: "input",
        name: "managerId",
        message: "What is manager's ID?",
        validate: validateUserInput,
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is manager's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is manager's office number?",
        validate: validateUserInput,
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.managerName,
        response.managerId,
        response.managerEmail,
        response.officeNumber
      );
      teamArr.push(manager);

      addTeam();
    });

  function addTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "selectMember",
          message: "Select a new employee:",
          choices: ["Engineer", "Intern", "Done"],
        },
      ])
      .then((response) => {
        switch (response.selectMember) {
          case "Intern":
            addIntern();
            break;
          case "Engineer":
            addEngineer();
            break;  
          default:
            console.log("You are done.");
            createTeam();
            break;
        }
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is engineer's name?",
          validate: validateUserInput,
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is engineer's ID?",
          validate: validateUserInput,
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is engineer's email address?",
          validate: function (value) {
            if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+.[a-zA-Z]+$/) {
              return true;
            } else {
              return "Please enter a valid email address.";
            }
          },
        },
        {
          type: "input",
          name: "github",
          message: "What is engineer's Github username?",
          validate: validateUserInput,
        },
      ])
      .then((response) => {
        const engineer = new Engineer(
          response.engineerName,
          response.engineerId,
          response.engineerEmail,
          response.github
        );
        teamArr.push(engineer);

        addTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is intern's name?",
          validate: validateUserInput,
        },
        {
          type: "input",
          name: "internId",
          message: "What is intern's ID?",
          validate: validateUserInput,
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is interns's email address?",
          validate: function (value) {
            if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+.[a-zA-Z]+$/) {
              return true;
            } else {
              return "Please enter a valid email address.";
            }
          },
        },
        {
          type: "input",
          name: "school",
          message: "What is intern's school?",
          validate: validateUserInput,
        },
      ])
      .then((response) => {
        const intern = new Intern(
          response.internName,
          response.internId,
          response.internEmail,
          response.school
        );
        teamArr.push(intern);

        addTeam();
      });
  }
  
  function createTeam() {
    return new Promise((resolve, reject) => {
        fs.writeFile('./index.html', renderPage(teamArr), err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Web page created'
            });
        });
    });
  }
};



generateTeam();