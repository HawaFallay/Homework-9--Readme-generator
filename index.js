const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs")
const generateMarkdown = require("./generateMarkdown");

const { stringify } = require("querystring");

//array of question for user input
const questions = [
    {
    type: "input",
    name: "Title",
    message: "What is the title of the project?",
}, {
    type: "input",
    name: "Description",
    message: "What is the project about?",

}, {
    type: "input",
    name: "screenshot",
    message: "Provide a relative path to the image",

}, {
    type: "input",
    name: "Link",
    message: "URL?",

}, {
    type: "input",
    name: "Usage",
    message: "How is the app used? Give instructions",

}, {
    type: "input",
    name: "License",
    message: "What liscence is being used?",

}, {
    type: "input",
    name: "Contributing",
    message: "Who contributed to this project?",

}, {
    type: "input",
    name: "Tests",
    message: "What commands are needed to test this app??",

}, {
    type: "input",
    name: "Questions",
    message: "Contact info for inquiries",

}, {
    type: "input",
    name: "Username",
    message: "What is your Github username?",

}, {
    type: "input",
    name: "Email",
    message: "What is your email address?",

},
 {
    type: "input",
    name: "Require",
    message: "What are the requirements to run the app?",

},

];

//function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("creating Profeesional README.md File...");
        writeToFile("./dist/README-mock.md", generateMarkdown({...responses}));
    });
}

//function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data); 
 }

//function to initialize program
init();

