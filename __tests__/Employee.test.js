const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should create an object with "name", "id", and "email" properties', () => {
            const actualEmployee = new Employee();
            const expectedObj = { name: undefined, id: undefined, email: undefined };
            
            expect(actualEmployee).toEqual(expectedObj);
        });
    });

    describe('getName', () => {
        it('should return the string "Mike" when "Mike" is passed in as the name argument', () => {
            const mike = new Employee('Mike');
            const expectedString = 'Mike';

            const actualString = mike.getName();

            expect(actualString).toEqual(expectedString);
        });
    });

    describe('getId', () => {
        it('should return the number 1 when 1 is passed in as the id argument', () => {
            const mike = new Employee('Mike', 1);
            const expectedId = 1;

            const actualId = mike.getId();

            expect(actualId).toEqual(expectedId);
        });
    });

    describe('getEmail', () => {
        it('should return the string "mike@mail.com" when "mike@mail.com" is passed in as the email argument', () => {
            const mike = new Employee('Mike', 1, 'mike@mail.com');
            const expectedString = 'mike@mail.com'

            const actualString = mike.getEmail();

            expect(actualEmail).toEqual(expectedEmail);
        });
    });

    describe('getRole', () => {
        it('should return the string "Employee" when the method is called', () => {
            const employee = new Employee();
            const expectedString = 'Employee';

            const actualString = employee.getRole();

            expect(actualString).toEqual(expectedString);
        });
    });
});