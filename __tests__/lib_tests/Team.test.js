const Team = require('../../lib/Team');

describe('Team', () => {
    describe('Initialization', () => {
        it('should create a Team object with "name" string and "employees" array properties', () => {
            const expected = { 
                name: undefined, 
                employees: undefined
            };
            const actual = new Team();

            expect(actual).toEqual(expected);
        });
    });

    describe('Add an employee', () => {
        it('should add an employee to the Team employees array value', () => {
            const employee = { name: 'Mike' };
            const expected = {
                name: undefined,
                employees: [ employee ]
            };

            const team = new Team();
            team.addEmployee(employee);

            expect(team).toEqual(expected);
        });
    });
});