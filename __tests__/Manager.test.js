const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('should create a an object with "name" "id" "email" and "officeNumber" properties', () => {
            const manager = new Manager();
            const expectedObj = {
                name: undefined,
                id: undefined,
                email: undefined,
                officeNumber: undefined
            };

            expect(manager).toEqual(expectedObj);
        });
    });

    describe('getRole', () => {
        it('should return the string "Manager" when the method is called', () => {
            const manager = new Manager();
            const expectedString = 'Manager';

            const actualString = manager.getRole();

            expect(actualString).toEqual(expectedString);
        });
    });
});