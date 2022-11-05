// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = ([
    {
        type: 'input',
        message: 'Enter your repository name:',
        naem: 'Title',
    },
    {
        type: 'input',
        message: 'Decribe your repository',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'How do you complete the insallation of your project?',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'Describe how your application should be used, as well as add images/gifs/videos',
        name: 'Usage'
    },
    {
        type: 'list',
        message: 'Select the appropriate license for your application',
        name: 'License',
        choices: [
            {value:'Apache'},
            {value: 'BSD3'},
            {value: 'LGPL'},
            {value: 'MPL'},
            {value: 'MIT'},
            {value: 'None'},
        ]
    },
    {
        type: 'input',
        message: 'Explain areas where other software developers can add and contribute to your project.',
        name: 'Contribution',
    },
    {
        type: 'input',
        message:'Explain how other developers can test your application as well as how you have tested your application',
        name: 'Test'
    },
    {
        type: 'input',
        message: 'Enter your Github Username',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter contact information email/discord/slack/social media.',
        name: 'Contact Info',
    }
])

// TODO: Create a function to write README file
.then((data)=>{
    const createFile = data.title.replace(' ',"").toLowerCase()
    fs.writeFile(`${createFile},md`, generateMarkdown(data), (err)=>
    err? console.error(err): console.log('Thanks for using Generate-a-Readme. The information you have entered is being generated into a README.md file for you.'))
})

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();