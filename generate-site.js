const fs = require("fs");

const writeFile = (htmlTemplate) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", htmlTemplate, (err) => {
      // if there's an error, reject the Promise and send error
      if (err) {
        reject(err);
        return;
      }
      //resolve the Promise and send to the .then()
      resolve({
        ok: true,
        message: "HTML File Gernerated, please visit dist folder to view.",
      });
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      // if there's an error, reject the Promise and send the error
      if (err) {
        reject(err);
        return;
      }
      //resolve the Promise and send to the .then()
      resolve({
        ok: true,
        message: "Style sheet loaded!",
      });
    });
  });
};

module.exports = { writeFile, copyFile };