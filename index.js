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
    message: "Provide a short description this project:",
    name: "description",
  },
  {
    type: "input",
    message: "Provide the command that should be run to install dependencies:",
    name: "installation",
    default: 'npm i',
    // have (npm i) as default somehow
  },
  {
    type: "input",
    message: "Provide helpful information for user attempting to use this repository:",
    name: "usage",
  },
  {
    type: "input",
    message: "Users will be provided your email if they wish to contribute to the repo. \nIf there is anything else you would like the user to know about contributions, please provide that here. \nIf not, please leave this blank.",
    name: "contribution",
  },
  {
    type: "input",
    message: "Provide the command users should run in order to run tests:",
    name: "test",
    default: 'npm test',
    // have (npm test) as default
  },
  {
    type: "list",
    message: "Select the license that applies to this application:",
    name: "license",
    choices: ["MIT License", "GNU General Public License v3.0", "Apache License 2.0"],
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

  const file = `./created-READMEs/README.md`;

  fs.writeFile(file, build.putStringTogether(data), (err) =>
    err ? console.error(err) : console.log("Success!")
  );
});
