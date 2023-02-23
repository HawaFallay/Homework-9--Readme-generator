const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs")
const util = require("util")

const generatorMarkdown = require("./util/generateMarkdown");
const { stringify } = require("querystring");

//array of question for user input
const questions = [{
    type: "input",
    name: "Title",
    message: "What is the title of the project?",
}, {
    type: "input",
    name: "Description",
    message: "What is the project about?",

}, {
    type: "input",
    name: "Table of Contents",
    message: "Table of Contents",

}, {
    type: "input",
    name: "Title",
    message: "Do any installations need to be made to run the app?",

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

];

//function to initialize app
function init() {
    inquirer.createPromptModule(questions).then((responses) => {
        console.log("creating Profeesional README.md File...");
        writeToFile("./dist/README.md", generateMarkdown({...responses}));
    });
}

//function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data); 
 }

//function to initialize program
init();

