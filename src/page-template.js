function generateManager(managerArray) {
  if (managerArray === []) {
    return ``;
  } else {
    const { name, id, email, officeNumber } = managerArray;
    return `
    <section class="employee-info card col col-lg-3 mx-4 shadow-lg p-3 mb-5 bg-body rounded">
      <div class="card-header">
        <h2 class="card-title pt-2 text-white fs-1">${name}</h2>
        <p class="text-white fs-4"><span class="icon"><i style="color: white" class="fa-solid fa-mug-hot"></i></span
        >Manager</p>
      </div>
      <div class="card-body fs-5">
        <p class="card-text">ID: ${id}</p>
        <p class="card-text">
          Email: <a href="mailto:${email}" target="blank">${email}</a>
        </p>
        <p class="card-text">Office Number: ${officeNumber}</p>
      </div>
    </section>`;
  }
}

function generateEngineer(engineerArray) {
  if (engineerArray === []) {
    return ``;
  } else {
    const { name, id, email, github } = engineerArray;
    return `
    <section class="employee-info card col col-lg-3 mx-4 shadow-lg p-3 mb-5 bg-body rounded">
          <div class="card-header">
            <h2 class="card-title pt-2 text-white fs-1">${name}</h2>
            <p class="text-white fs-4"><span class="icon"><i style="color: white" class="fa-solid fa-glasses"></i></span>Engineer</p>
          </div>
          <div class="card-body fs-5">
            <p class="card-text">ID: ${id}</p>
            <p class="card-text">
              Email: <a href="mailto:${email}" target="blank">${email}</a>
            </p>
            <p class="card-text">
              GitHub: <a href="https://github.com/${github}" target="blank">${github}</a>
            </p>
          </div>
    </section>`;
  }
}

function generateIntern(internArray) {
  if (internArray === []) {
    return ``;
  } else {
    const { name, id, email, school } = internArray;
    return `
      <section class="employee-info card col col-lg-3 mx-4 shadow-lg p-3 mb-5 bg-body rounded">
        <div class="card-header">
          <h2 class="card-title pt-2 text-white fs-1">${name}</h2>
          <p class="text-white fs-4"><span class="icon"><i style="color: white" class="fa-solid fa-user-graduate"></i></span>Intern</p>
        </div>
        <div class="card-body fs-5">
          <p class="card-text">ID: ${id}</p>
          <p class="card-text">
            Email: <a href="mailto:${email}" target="blank">${email}</a>
          </p>
          <p class="card-text">School: ${school}</p>
        </div>
      </section>`;
  }
}

function generatePage(employeeArray) {
  var html = [];
  html.push(
    employeeArray
      .filter((employee) => employee.getRole() === "Manager")
      .map((managers) => generateManager(managers))
  );
  html.push(
    employeeArray
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineers) => generateEngineer(engineers))
      .join("")
  );
  html.push(
    employeeArray
      .filter((employee) => employee.getRole() === "Intern")
      .map((interns) => generateIntern(interns))
      .join("")
  );
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
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <header class="py-3 text-center">
          <h1>My Team Profile</h1>
        </header>
        <main class="container my-5 mx-auto">
          <div class="row justify-content-center">
          ${html.join("")}
          </div>
        </main>
      </body>
    </html>
    `;
}

module.exports = generatePage;
