const { link } = require("fs");

//creating a function to generate markdown README
function generateMarkdown(data){
  console.log(data)
  return `${data.Title}
 by ${data.Username}
# TableOfContents
* [Description](#description)
* [Requirements](#requirements)
* [Testing](#testing)
* [Usage](#usage)
* [Contact](#contact)
* [Contributing](#contributing)
* [Licence](#License)
# Description
${data.Description}
# Requirements
${data.Require}
# Testing
${data.Tests}
# Usage
${data.Usage}
# Contact
${data.contact}
* Name - ${data.Username}
* email - ${data.Email}
* GitHub - [${data.Username}](https://github.com/${data.Username}/${data.Link})
# Contributing
${data.Contributing}
# Licence
${data.License}`
}

module.exports = generateMarkdown;

