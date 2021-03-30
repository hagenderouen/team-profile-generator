const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('should create an object with "name" "id" "email" and "school" properties', () => {
            const actualObj = new Intern();
            const expectedObj = {
                name: undefined,
                id: undefined,
                email: undefined,
                school: undefined
            };

            expect(actualObj).toEqual(expectedObj);
        });
    });

    describe('getSchool', () => {
        it('should return the string "UTSA" when "UTSA" is passed in as a school property argument', () => {
            const intern = new Intern(undefined, undefined, undefined, 'UTSA');
            const expectedString = 'UTSA';

            const actualString = intern.getSchool();

            expect(actualString).toEqual(expectedString);
        });
    });
});