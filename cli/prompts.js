const inquirer = require("inquirer");

const teamNamePrompt = {
        type: 'input',
        message: 'Enter your team name',
        name: 'teamName'
    };

const isAddingEmployeePrompt = {
        type: 'confirm',
        message: 'Would you like to add an employee?',
        name: 'isAddingEmployee'
};

const employeePrompts = [
    {
        type: 'list',
        message: 'Add a team member. Select their role',
        choices: ['Manager', 'Engineer', 'Intern'],
        name: 'role'
    },
    {
        type: 'input',
        message: "Enter employee's name",
        name: 'employeeName',
    },
    {
        type: 'input',
        message: "Enter employee's email",
        name: 'email'
    },
    {
        type: 'input',
        message: "Enter employee's id",
        name: 'id'
    },
    {
        type: 'input',
        message: "Enter manager's office number",
        name: "officeNumber",
        when: roleChoiceIs('Manager'),
    },
    {
        type: 'input',
        message: "Enter the intern's school",
        name: 'school',
        when: roleChoiceIs('Intern'),
    },
    {
        type: 'input',
        message: "Enter engineer's gitHub username",
        name: 'username',
        when: roleChoiceIs('Engineer'),
    }
    
];

function roleChoiceIs(role) {
    return function(answers) {
        return answers.role === role;
    }
}

module.exports = {
    teamNamePrompt,
    isAddingEmployeePrompt,
    employeePrompts
}
     

