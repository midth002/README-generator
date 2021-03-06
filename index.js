// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require("./utils/generateMarkdown.js")
// const license = require('license')

// TODO: Create an array of questions for user input
const questions = [ 'What is your GitHub username?', 
                    'What is your email address?', 
                    'What is the title of your project?',
                    'Provide a description of your project?', 
                    'What kind of license should your project have?', 
                    'What command should be run to install dependencies?', 
                    'What command should be run to run tests?',
                    'What does the user need to know about using the repo?',
                    'What does the user need to know about contributing to the repo?'
]

const choices = ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readMeContent = generateMarkDown(data)
    fs.writeFile(fileName, readMeContent, (err) => {
        if (err) {
            console.log(err)
        } 
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer 
    .prompt([
        {
            type: 'input',
            name: 'username',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'email',
            message: questions[1]
        },
        {
            type: 'input',
            name: 'title',
            message: questions[2]
        },
        {
            type: 'input',
            name: 'description',
            message: questions[3]
        },
        {
            type: 'list',
            name: 'license',
            message: questions[4],
            choices: choices,
        },
        {
            type: 'input',
            name: 'dependencies',
            message: questions[5],
            default: 'npm i'
        },
        {
            type: 'input',
            name: 'tests',
            message: questions[6],
            default: 'npm run test'
        },
        {
            type: 'input',
            name: 'using',
            message: questions[7]
        },
      
        {
            type: 'input',
            name: 'contributing',
            message: questions[8]
        },
    ])
    .then((response) => {
        console.log("Readme file success!")
        writeToFile("README.md", response)
}
    );
}

// Function call to initialize app
init();
