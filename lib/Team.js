class Team {
    constructor(name, employees) {
        this.name = name;
        this.employees = employees;
    }

    addEmployee(employee) {
        if (this.employees === undefined) {
            this.employees = [];
        }
        
        this.employees.push(employee);
    }
}

module.exports = Team;