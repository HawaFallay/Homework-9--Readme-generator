const { link } = require("fs");

//creating a function to generate markdown README
function generateMarkdown(data){
  console.log(data)
  return `${data.Title}
 by ${data.Username}
# TableOfContents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Contact](#contact)
# Description
${data.Description}
# Requirements
${data.Require}
# Testing
${data.Tests}
# Usage
${data.Usage}
# Contact-
${data.contact}
* Name - ${data.Username}
* email - ${data.Email}
* GitHub - [${data.Username}/${data.Link}](https://github.com/${data.Username}/${data.Link})
# Contributing
${data.Contributing}
# Liscence
${data.License}`
}

module.exports = generateMarkdown;

