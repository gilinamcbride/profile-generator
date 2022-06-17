const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const managerArray = [
  {
    type: "input",
    name: "name",
    message: "What is the team manager's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the team manager's ID",
  },
  {
    type: "input",
    name: "email",
    message: "What is the team manager's email?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the team manager's office number?",
  },
];

const engineerArray = [
  {
    type: "input",
    name: "name",
    message: "What is the engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the engineer's ID",
  },
  {
    type: "input",
    name: "email",
    message: "What is the engineer's email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's Github username?",
  },
];

const internArray = [
  {
    type: "input",
    name: "name",
    message: "What is the intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the intern's ID",
  },
  {
    type: "input",
    name: "email",
    message: "What is the intern's email?",
  },
  {
    type: "input",
    name: "school",
    message: "What is the intern's school?",
  },
];

function Team() {
  this.team = [];
}

Team.prototype.askQuestions = function () {
  inquirer.prompt(managerArray).then(({ name, id, email, officeNumber }) => {
    this.team.push(new Manager(name, id, email, officeNumber));
    inquirer
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
          return this.getEngineer();
        }
        if (add === "Intern") {
          return this.getIntern();
        } else {
          console.log(this.team);
          return;
          //   write file & copy file & console.log page was created
        }
      });
  });
};

Team.prototype.getEngineer = function () {
  inquirer.prompt(engineerArray).then(({ name, id, email, github }) => {
    this.team.push(new Engineer(name, id, email, github));
    inquirer
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
        } else {
          console.log(this.team);
          return;
          //   write file & copy file & console.log page was created
        }
      });
  });
};

Team.prototype.getIntern = function () {
  inquirer.prompt(internArray).then(({ name, id, email, school }) => {
    this.team.push(new Intern(name, id, email, school));
    inquirer
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
        } else {
          console.log(this.team);
          return;
          //   write file & copy file & console.log page was created
        }
      });
  });
};

new Team().askQuestions();
