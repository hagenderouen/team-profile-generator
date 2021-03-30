const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('should create an object with "name" "id" "email" and "github" properties', () => {
            const actualObj = new Engineer();
            const expectedObj = {
                name: undefined,
                id: undefined,
                email: undefined,
                github: undefined
            }

            expect(actualObj).toEqual(expectedObj);
        });
    });

    describe('getGithub', () => {
        it('should return the string "mikeusername" when "mikeusername" is passed in as the github property argument', () => {
            const engineer = new Engineer('Mike', 1, 'mike@mail.com', 'mikeusername');
            const expectedString = 'mikeusername';

            const actualString = engineer.getGithub();

            expect(actualString).toEqual(expectedString);
        });
    });

    describe('getRole', () => {
        it('should return the string "Engineer" when the method is called', () => {
            const engineer = new Engineer();
            const expectedString = 'Engineer';

            const actualString = engineer.getRole();

            expect(actualString).toEqual(expectedString);
        });
    });
});