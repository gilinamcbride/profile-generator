// const Manager = require("./lib/Manager");
// const Intern = require("./lib/Intern");
// const Engineer = require("./lib/Engineer");

const generateManager = (employeeArray) => {
  return `
    ${employeeArray
      .filter((Engineer) => Engineer)
      .map(({ name, id, email, officeNumber }) => {
        return `
    <section
          class="employee-info card col col-lg-3 mx-4 shadow-lg p-3 mb-5 bg-body rounded"
        >
          <div class="card-header">
          <h2 class="card-title pt-2 text-white fs-1">${name}</h2>
            <p class="text-white fs-4"><span class="icon"><i style="color: white" class="fa-solid fa-mug-hot"></i></span
            >Manager</p>
          </div>
          <div class="card-body fs-5">
            <p class="card-text">ID: ${id}</p>
            <p class="card-text">
              Email:
              <a href="mailto:${email}" target="blank"
                >${email}</a
              >
            </p>
            <p class="card-text">Office Number: ${officeNumber}</p>
          </div>
        </section>`;
      })
      .join("")}`;
};

const generateEngineer = (employeeArray) => {
  return `
  ${employeeArray
    .filter((Engineer) => Engineer)
    .map(({ name, id, email, github }) => {
      return `
        <section
              class="employee-info card col col-lg-3 mx-4 shadow-lg p-3 mb-5 bg-body rounded"
            >
              <div class="card-header">
              <h2 class="card-title pt-2 text-white fs-1">${name}</h2>
                <p class="text-white fs-4"><span class="icon"><i style="color: white" class="fa-solid fa-glasses-round"></i></span
                >Engineer</p>
              </div>
              <div class="card-body fs-5">
                <p class="card-text">ID: ${id}</p>
                <p class="card-text">
                  Email:
                  <a href="mailto:${email}" target="blank"
                    >${email}</a
                  >
                </p>
                <p class="card-text">
                  GitHub:
                  <a href="https://github.com/${github}" target="blank"
                    >${github}</a
                  >
                </p>
              </div>
        </section>`;
    })
    .join("")}`;
};

const generateIntern = (employeeArray) => {
  return `
    ${employeeArray
      .filter((Intern) => Intern)
      .map(({ name, id, email, school }) => {
        return `
        <section
            class="employee-info card col col-lg-3 mx-4 shadow-lg p-3 mb-5 bg-body rounded"
            >
            <div class="card-header">
            <h2 class="card-title pt-2 text-white fs-1">${name}</h2>
            <p class="text-white fs-4"><span class="icon"><i style="color: white" class="fa-solid fa-user-graduate"></i></span
            >Intern</p>
            </div>
            <div class="card-body fs-5">
                <p class="card-text">ID: ${id}</p>
                <p class="card-text">
                Email:
                <a href="mailto:${email}" target="blank"
                    >${email}</a
                >
                </p>
                <p class="card-text">School: ${school}</p>
            </div>
            </section>`;
      })
      .join("")}`;
};

const generatePage = (employeeArray) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed&family=Satisfy&display=swap"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/e9af64bbdb.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./src/style.css" />
      </head>
      <body>
        <header class="py-3 text-center">
          <h1>My Team Profile</h1>
        </header>
        <main class="container my-5 mx-auto">
          <div class="row justify-content-center">
          ${generateManager(employeeArray)}
          ${generateEngineer(employeeArray)}
          ${generateIntern(employeeArray)}
          </div>
          </main>
        </body>
      </html>
    `;
};

module.exports = generatePage();
