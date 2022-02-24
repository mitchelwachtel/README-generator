const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
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
      choices: ["MIT", "GNU"],
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
  ])
  .then((data) => {
    console.log(data);
    const file = `README${data.title}.md`;

    fs.writeFile(file, `# ${data.title}\n\n## ${data.email}\n\n### Table of contents\n* [Description](#description)\n* [Installation](#installation)\n* [Usage](#usage)\n* [License](#license)\n* [Tests](#tests)\n* [Questions](#questions)\n`, (err) =>
      err ? console.error(err) : console.log("Success!")
    );

    // fs.appendFile(file, `## {data.email}\n\n`)
  });

//     const contents = `<!DOCTYPE html> <html> <head> <title>${data.name}</title> </head> <body style="text-align: center;"> <h1>${data.name}</h1> <div style="margin: 10px; padding: 10px;"> <p>Location: ${data.location}</p> <p>LinkedIn: ${data.linkedin}</p> <p>GitHub: ${data.github}</p> <p>Bio: ${data.bio}</p> </div> </body> </html> `;

//     fs.writeFile(fileName, contents, (err) =>
//       err ? console.error(err) : console.log("Success!")
//     );
//   });
