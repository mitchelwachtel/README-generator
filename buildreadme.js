// This entire js file is used to make the index.js more legible once I realized how tedious it would be to read/write this if it was one line of code.
// BASIC HEADER
const header = (data) => {
  renderLicenseBadge = (license) => {
    if (license == "GNU General Public License v3.0") {
      return "![GNU General Public License v3.0 logo](./assets/images/gnu.png)";
    } else if (license == "MIT License") {
      return "![MIT License logo](./assets/images/mit.png)";
    } else if (license == "Apache License 2.0") {
      return "![Apache License 2.0 logo](./assets/images/apache.png)";
    } else {
      return "";
    }
  };
  const badge = renderLicenseBadge(data.license);
  if (data.name !== null) {
    return `# ${data.title}\n## ${data.name} - ${data.email}\n\n${badge}\n\n---\n### Table of contents\n* [Description](#description)\n* [Installation](#installation)\n* [Usage](#usage)\n* [License](#license)\n* [Contributing](#contributing)\n* [Tests](#tests)\n* [Questions](#questions)\n---\n`;
  } else {
    return `# ${data.title}\n## ${data.email}\n\n${badge}\n\n---\n### Table of contents\n* [Description](#description)\n* [Installation](#installation)\n* [Usage](#usage)\n* [License](#license)\n* [Contributing](#contributing)\n* [Tests](#tests)\n* [Questions](#questions)\n---\n`;
  }
};

// function to create Description Section
const description = (data) => {
  return `### Description\n${data.description}\n\n---\n`;
};

// function to create Installation Section
const install = (data) => {
  return `### Installation\n${data.installation}\n\n---\n`;
};

// function to create Usage Section
const usage = (data) => {
  return `### Usage\n${data.usage}\n\n---\n`;
};

// function to create License Section
const license = (data) => {
  renderLicenseBadge = (license) => {
    if (license == "GNU General Public License v3.0") {
      return "GNU General Public License v3.0\n\n![GNU General Public License v3.0 logo](./assets/images/gnu.png)";
    } else if (license == "MIT License") {
      return "MIT License\n\n![MIT License logo](./assets/images/mit.png)";
    } else if (license == "Apache License 2.0") {
      return "Apache License 2.0\n\n![Apache License 2.0 logo](./assets/images/apache.png)";
    } else {
      return "";
    }
  };
  renderLicenseLink = (license) => {
    if (license == "GNU") {
      return "Read more about the GNU General Public License v3.0 *[here](https://www.gnu.org/licenses/gpl-3.0.en.html)*.";
    } else if (license == "MIT") {
      return "Read more about the MIT License *[here](https://opensource.org/licenses/MIT)*.";
    } else if (license == "Apache") {
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
  return `### Contributing\n${data.contribution}\n\n---\n`;
};

// function to create Tests Section
const tests = (data) => {
  return `### Tests\n${data.test}\n\n---\n`;
};

// function to create Questions Section
const questions = (data) => {
  return `### Questions\nPlease send me an email at ${data.email} and I'll be quick to get back to you! Find me on GitHub at https://github.com/${data.github}\n\n`;
};

const putStringTogether = (data) => {
  let string =
    header(data) +
    description(data) +
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
