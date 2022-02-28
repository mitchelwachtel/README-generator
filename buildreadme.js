// This entire js file is used to make the index.js more legible once I realized how tedious it would be to read/write this if it was one line of code.
// BASIC HEADER
const header = (data) => {
  renderLicenseBadge = (license) => {
    if (license == "GNU General Public License v3.0") {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (license == "MIT License") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license == "Apache License 2.0") {
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else {
      return "";
    }
  };
  const badge = renderLicenseBadge(data.license);
  if (data.name !== null) {
    return `# ${data.title}\n## ${data.name} - ${data.email}\n\n${badge}\n\n---\n`;
  } else {
    return `# ${data.title}\n## ${data.email}\n\n${badge}\n\n---\n`;
  }
};

// function to create Description Section
const description = (data) => {
  return `### Description\n${data.description}\n\n---\n`;
};

const tableOfContents = (data) => {
  return `### Table of contents\n* [Installation](#installation)\n* [Usage](#usage)\n* [License](#license)\n* [Contributing](#contributing)\n* [Tests](#tests)\n* [Questions](#questions)\n---\n`;
};

// function to create Installation Section
const install = (data) => {
  return '### Installation\nTo install the dependencies necessary to run use the application, the user should run the following command first:\n\n`' + data.installation + '`\n\n---\n';
};

// function to create Usage Section
const usage = (data) => {
  return `### Usage\n${data.usage}\n\n---\n`;
};

// function to create License Section
const license = (data) => {
  renderLicenseBadge = (license) => {
    if (license == "GNU General Public License v3.0") {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (license == "MIT License") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license == "Apache License 2.0") {
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else {
      return "";
    }
  };
  renderLicenseLink = (license) => {
    if (license == "GNU General Public License v3.0") {
      return "Read more about the GNU General Public License v3.0 *[here](https://www.gnu.org/licenses/gpl-3.0.en.html)*.";
    } else if (license == "MIT License") {
      return "Read more about the MIT License *[here](https://opensource.org/licenses/MIT)*.";
    } else if (license == "Apache License 2.0") {
      return "Read more about the Apache License 2.0 *[here](https://www.apache.org/licenses/LICENSE-2.0)*.";
    } else {
      return "";
    }
  };
  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);
  return `### License\n\n${badge}\n\n${link}\n\n---\n`;
};

// function to create Contributions Section
const contribution = (data) => {
  return `### Contributing\nPlease contact ${data.email} if you have any desire to contribute to this project.\n\n${data.contribution}\n\n---\n`;
};

// function to create Tests Section
const tests = (data) => {
  return '### Tests\nTo run tests on the application, the user should run the following command:\n\n`' + data.test + '`\n\n---\n';
};

// function to create Questions Section
const questions = (data) => {
  return `### Questions\nIf you have any questions, please send me an email at ${data.email} and I'll be quick to get back to you! You can also open an issue on GitHub. Find me on GitHub at https://github.com/${data.github} if you are interested in any of my other work.\n\n`;
};

const putStringTogether = (data) => {
  let string =
    header(data) +
    description(data) +
    tableOfContents(data) +
    install(data) +
    usage(data) +
    license(data) +
    contribution(data) +
    tests(data) +
    questions(data);
  return string;
};

module.exports = {
  putStringTogether,
};
