
describe('Employee', () => {
    describe('Initialization', () => {
        it('should create an object with "name", "id", and "email" properties', () => {
            const actualEmployee = new Employee();
            const expectedObj = { name: undefined, id: undefined, email: undefined };
            
            expect(actualEmployee).toEqual(expectedObj);
        });
    });

    describe('getName', () => {
        it('should return the string "Mike" when "Mike" is passed in as the Employee name argument', () => {
            const mike = new Employee('Mike');
            const actualString = mike.getName();
            const expectedString = 'Mike';

            expect(actualString).toEqual(expectedString);
        });
    });

    describe('getId', () => {
        it('should return the number 1 when 1 is passed in as the Employee id argument', () => {
            const mike = new Employee('Mike', 1);
            const actualId = mike.getId();
            const expectedId = 1;

            expect(actualId).toEqual(expectedId);
        });
    });

    describe('getEmail', () => {
        it('should return the string "mike@mail.com" when "mike@mail.com" is passed in as the Employee email argument', () => {
            const mike = new Employee('Mike', 1, 'mike@mail.com');
            const actualString = mike.getEmail();
            const expectedString = 'mike@mail.com'

            expect(actualEmail).toEqual(expectedEmail);
        });
    });

    describe('getRole', () => {
        it('should return the string "Employee" when the method is called', () => {
            const employee = new Employee();
            const actualString = employee.getRole();
            const expectedString = 'Employee';

            expect(actualString).toEqual(expectedString);
        });
    });
})