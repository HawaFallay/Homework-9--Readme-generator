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
* [License](#License)
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
* GitHub - [${data.Username}](https://github.com/${data.Username})
# Contributing
${data.Contributing}
# License
${data.License}`
}

module.exports = generateMarkdown;

