const Manager = require("../lib/Manager");
const Team = require("../lib/Team");

function startHtml(teamName) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team ${teamName}</title>
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <!-- Customer CSS -->
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <div class="containter-fluid">
        <header class="d-flex justify-content-center p-5">
            <h1>Team ${teamName}</h1>
        </header>
    </div>
    
    <div class="container">

        <main class="p-5">`
};

function createEmployeeCard(employee) {

    switch(employee.constructor.name) {
        case 'Manager':
            return `
    <div class="col-3">
        <div class="card shadow-sm">
            <div class="card-body">
            <h5 class="card-title">${employee.name}</h5>
            <p class="card-text"><i class="fas fa-mug-hot"></i> Manager</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
            </ul>
        </div>
    </div>`
        case 'Engineer':
            return `
    <div class="col-3">
        <div class="card shadow-sm">
            <div class="card-body">
            <h5 class="card-title">${employee.name}</h5>
            <p class="card-text"><i class="fas fa-glasses"></i> Engineer</p>
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></li>
                </ul>
        </div>
    </div>`
        case 'Intern':
            return `
    <div class="col-3">
        <div class="card shadow-sm">
            <div class="card-body">
            <h5 class="card-title">${employee.name}</h5>
            <p class="card-text"><i class="fas fa-user-graduate"></i> Intern</p>
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">School: ${employee.school}</li>
                </ul>
        </div>
    </div>`
    }

};

function createEmployeeCards(employees) {
    let cards = '';

    if (employees.length === 0) {
        return '';
    } else {

        cards += `
        <div class="row my-3">`
        for (var i = 0; i < employees.length; i++) {
            let employee = employees[i];
            let count = i + 1;
            
            // for every fifth employee, close div row and create a new row
            if (count % 5 === 0) {
                cards += `
        </div>
        
        <div class="row my-3">`
                cards += createEmployeeCard(employee);
            } else {
                cards += createEmployeeCard(employee);
            }
        }

        cards += `
        </div>`
        
    }

    return cards;
}

function finishHtml() {
    return `
    </main>

    </div>
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/b61bb58744.js" crossorigin="anonymous"></script>
</body>
</html>`
}

function createHtml(team) {
    main = startHtml(team.name);
    main += createEmployeeCards(team.employees);
    main += finishHtml();

    return main;
}

function createStyles() {
    return `header {
    background-color: #277da1;
    color: white;
}
    
.card-body {
    background-color: #43aa8b;
    color: white;
}`

}

module.exports = {
    createHtml,
    createStyles
}
