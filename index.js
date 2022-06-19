const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generatePage = require("./src/page-template.js");
const { writeFile, copyFile } = require("./utils/generate-page");
// const fs = require("fs");

const managerArray = [
  {
    type: "input",
    name: "name",
    message: "What is the team manager's name?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the name of your team manager.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is the team manager's ID",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter your team manager's id.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the team manager's email?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your team manager's email.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the team manager's office number?",
    validate: (officeInput) => {
      if (officeInput) {
        return true;
      } else {
        console.log("Please enter your team manager's office number.");
        return false;
      }
    },
  },
];

const engineerArray = [
  {
    type: "input",
    name: "name",
    message: "What is the engineer's name?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the name of your engineer.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is the engineer's ID",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter your engineer's id.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the engineer's email?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your engineer's email.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's Github username?",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your engineer's github username.");
        return false;
      }
    },
  },
];

const internArray = [
  {
    type: "input",
    name: "name",
    message: "What is the intern's name?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the name of your intern.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is the intern's ID",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter your intern's id.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the intern's email?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your intern's email.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "school",
    message: "What is the intern's school?",
    validate: (schoolInput) => {
      if (schoolInput) {
        return true;
      } else {
        console.log("Please enter the school your intern attends.");
        return false;
      }
    },
  },
];

function Team() {
  this.team = [];
  this.managerArray = [];
  this.engineerArray = [];
  this.internArray = [];
}

Team.prototype.askQuestions = function () {
  return inquirer
    .prompt(managerArray)
    .then(({ name, id, email, officeNumber }) => {
      this.team.push(new Manager(name, id, email, officeNumber));
      this.getNewEmployee();
    });
};

Team.prototype.getEngineer = function () {
  return inquirer.prompt(engineerArray).then(({ name, id, email, github }) => {
    this.team.push(new Engineer(name, id, email, github));
    this.getNewEmployee();
  });
};

Team.prototype.getIntern = function () {
  return inquirer.prompt(internArray).then(({ name, id, email, school }) => {
    this.team.push(new Intern(name, id, email, school));
    this.getNewEmployee();
  });
};

Team.prototype.getNewEmployee = function () {
  return inquirer
    .prompt({
      type: "list",
      name: "add",
      message: "Which type of team member would you like to add?",
      choices: [
        "Engineer",
        "Intern",
        "I don't want to add any more team members.",
      ],
    })
    .then(({ add }) => {
      if (add === "Engineer") {
        this.getEngineer();
      }
      if (add === "Intern") {
        this.getIntern();
      }
      if (add === "I don't want to add any more team members.") {
        console.log("Done!");
        console.log(this.team);
        generatePage(this.team);
        // TODO: this way it says generatePage.then isn't a fx
        // .then((content) => {
        //   return writeFile(content);
        // })
        // .then(copyFile);
        // TODO: this way how is it getting the info from the generate page
        // writeFile(this.team);
      }
    });
};

new Team()
  // TODO: proble: calling write file before we get to the end of all of the questions
  // it throws an error before asked if you want to add a team mate
  .askQuestions()
  .then((content) => {
    // TODO: here it says info give to write file needs to be string and isn't
    return writeFile(content);
  })
  .then(copyFile())
  .catch((err) => {
    console.log(err);
  });
