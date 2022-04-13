// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const license = require('license')

// TODO: Create an array of questions for user input
function askReadMeQuestions() {
    inquirer 
    .prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            name: 'dependencies',
            message: 'What command should be run to install dependencies?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests?'
        },
        {
            type: 'input',
            name: 'using',
            message: 'What does the user need to know about using the repo?'
        },
      
        {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know about contributing to the repo?'
        },
    ])
    .then((response) => {
        console.log(response.license)
        // const answer = JSON.stringify(response)
       
        // console.log(answer.license)
        // console.log(answer)
        // writeToFile("README.md", JSON.stringify(response))
    
    })
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Generating README...")
            console.log(data.license)
            
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    askReadMeQuestions();
}

// Function call to initialize app
init();
