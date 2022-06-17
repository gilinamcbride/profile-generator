const fs = require("fs");

const writeFile = (pageContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/team.html", pageContent, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message:
          "Your 'My Team' Page has been created! Checkout team.html in the dist directory!",
      });
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "Style sheet copied successfully!",
      });
    });
  });
};

module.exports = { writeFile, copyFile };
