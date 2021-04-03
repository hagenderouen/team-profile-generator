const inquirer = require('inquirer');
const fs = require('fs');
const { teamNamePrompt, isAddingEmployeePrompt, employeePrompts } = require('./prompts');
const Team = require('../lib/Team');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

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
}

function start() { 
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
}

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
}

function end(team) {
    console.log(team);
}

function outputHtml() {
    
}

module.exports = {
    createEmployee,
    start
}







