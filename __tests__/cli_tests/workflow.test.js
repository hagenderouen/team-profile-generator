const { createEmployee } = require('../../cli/workflow');
const Manager = require('../../lib/Manager');

jest.mock('inquirer');

describe('Workflow', () => {
    describe('Create an employee', () => {
        it('should return a Manager object when passed in an object with the role property value "Manager"', () => {
            const obj = {
                role: 'Manager'
            };
            const expectedObj = new Manager();

            const actualObj = createEmployee(obj);

            expect(expectedObj).toEqual(actualObj);
        })
    })
})