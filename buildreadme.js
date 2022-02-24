// This entire js file is used to make the index.js more legible once I realized how tedious it would be to read/write this if it was one line of code.
// BASIC HEADER
const header = (data) => {
  return `# ${data.title}\n## ${data.name} - ${data.email}\n---\n### Table of contents\n* [Description](#description)\n* [Installation](#installation)\n* [Usage](#usage)\n* [License](#license)\n* [Tests](#tests)\n* [Questions](#questions)\n---\n`;
};

// function to create Description
const description = (data) => {
  return ``;
};

// function to create Installation
const install = (data) => {
  return ``;
};

// function to create Usage
const usage = (data) => {
  return ``;
};

// function to create License
const license = (data) => {
  return ``;
};

// function to create Tests
const tests = (data) => {
  return ``;
};

// function to create Questions
const questions = (data) => {
  return ``;
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
