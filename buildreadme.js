// This entire js file is used to make the index.js more legible once I realized how tedious it would be to read/write this if it was one line of code.
// BASIC HEADER
const header = (data) => {
  if (data.name !== null) {
    return `# ${data.title}\n## ${data.name} - ${data.email}\n---\n### Table of contents\n* [Description](#description)\n* [Installation](#installation)\n* [Usage](#usage)\n* [License](#license)\n* [Tests](#tests)\n* [Questions](#questions)\n---\n`;
  } else {
    return `# ${data.title}\n## ${data.email}\n---\n### Table of contents\n* [Description](#description)\n* [Installation](#installation)\n* [Usage](#usage)\n* [License](#license)\n* [Tests](#tests)\n* [Questions](#questions)\n---\n`;
  }
};

// function to create Description
const description = (data) => {
  return `### Description\n${data.description}\n\n---\n`;
};

// function to create Installation
const install = (data) => {
  return `### Installation\n${data.installation}\n\n---\n`;
};

// function to create Usage
const usage = (data) => {
  return `### Usage\n${data.usage}\n\n---\n`;
};

// function to create License
const license = (data) => {
  return `### License\n${data.license}\n\n---\n`;
};

// function to create Tests
const tests = (data) => {
  return `### Tests\n${data.test}\n\n---\n`;
};

// function to create Questions
const questions = (data) => {
  return `### Questions\nPlease send me an email at ${data.email} and I'll be quick to get back to you! Find me on GitHub at https://github.com/${data.github}\n\n`;
};

module.exports = {
  header,
  description,
  install,
  usage,
  license,
  tests,
  questions,
};
