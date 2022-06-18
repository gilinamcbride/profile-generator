const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generatePage = require("./src/page-template.js");
// const { writeFile, copyFile } = require("./utils/generate-page.js");

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
        }
      });
  });
};

new Team().askQuestions().then((teamArr) => {
  generatePage(teamArr);
});
// .then((pageHTML) => {
//   return writeFile(pageHTML);
// })
// .then(() => {
//   return copyFile();
// })
// .catch((err) => {
//   console.log(err);
// });
