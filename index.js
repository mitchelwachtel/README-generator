const fs = require("fs");
const inquirer = require("inquirer");
const build = require("./buildreadme.js");

const questions = [
  {
    type: "input",
    message: "Provide your name:",
    name: "name",
  },
  {
    type: "input",
    message: "Provide title of the project:",
    name: "title",
  },
  {
    type: "input",
    message: "Describe the project:",
    name: "description",
  },
  {
    type: "input",
    message: "Provide installation instructions:",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide usage information:",
    name: "usage",
  },
  {
    type: "input",
    message: "Provide contribution guidelines:",
    name: "contribution",
  },
  {
    type: "input",
    message: "Provide test instructions:",
    name: "test",
  },
  {
    type: "list",
    message: "Select the license that applies to this application:",
    name: "license",
    choices: ["MIT", "GNU", "Apache"],
  },
  {
    type: "input",
    message: "Provide GitHub username:",
    name: "github",
  },
  {
    type: "input",
    message: "Provide your email address:",
    name: "email",
  },
];

inquirer.prompt(questions).then((data) => {
  console.log(data);

  const file = `README${data.title}.md`;

  fs.writeFile(file, build.putStringTogether(data), (err) =>
    err ? console.error(err) : console.log("Success!")
  );
});
