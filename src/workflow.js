const inquirer = require('inquirer');
const fs = require('fs');
const { resolve } = require('path');
const chalk = require('chalk');
const { teamNamePrompt, isAddingEmployeePrompt, employeePrompts } = require('./prompts');
const Team = require('../lib/Team');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const { createHtml, createStyles } = require('./elements');
const HTML_PATH = './dist/team.html';
const STYLE_PATH = './dist/style.css';

function createEmployee(answers) {
    const { role, employeeName, id, email, officeNumber, school, username } = answers;

    switch(role) {
        case 'Manager':
            return new Manager(employeeName, id, email, officeNumber);
        case 'Engineer':
            return new Engineer(employeeName, id, email, username);
        case 'Intern':
            return new Intern(employeeName, id, email, school);
        default:
            console.log(`Role: ${role} not found`);
    }
};

function start() {
    console.log(chalk.green('Welcome to Team Profile Generator! Please answer a few questions to get started.')); 
    let team = new Team();
 
    inquirer.prompt([teamNamePrompt])
    .then((teamNameAns) => { 
        team.name = teamNameAns.teamName;
        addEmployee(team);
    }).catch((err) => console.log(err));

};

function addEmployee(team) {
    inquirer.prompt(employeePrompts)
    .then((answers) => {
        team.addEmployee(createEmployee(answers));
        isAddingEmployee(team)
    })
    .catch((err) => console.log(err));
};

function isAddingEmployee(team) {
    inquirer.prompt([isAddingEmployeePrompt])
    .then((answers) => {
        if (answers.isAddingEmployee) {
            addEmployee(team);
        } else {
            end(team);
        }
    })
    .catch((err) => console.log(err));
};

function end(team) {
    const html = createHtml(team);
    const style = createStyles();
    console.log(chalk.green('Writing team profile html...'));
    fs.writeFile(HTML_PATH, html, (err) => {
        if (err) {
            console.log(chalk.red(err));
        } else {
            console.log(chalk.green(`Sucessfully wrote html file to ${resolve(HTML_PATH)}`));
        }
        
    });
    fs.writeFile(STYLE_PATH, style, (err) => {
        if (err) {
            console.log(chalk.red(err));
        } else {
            console.log(chalk.green(`Successfully wrote css file to ${resolve(STYLE_PATH)}`));
        }
        
    })
}


module.exports = {
    createEmployee,
    start
}







