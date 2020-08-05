const { verifyPass } = require('./verifier');

describe('verifyPass', () => { // Name of the feature or the name of the code we'd like to test. 
    test('no rules, passes', () => {
        const result = verifyPass('any input', []);

        expect(result).toBeTruthy();
    });
    test('one failed rule, fails', () => {
        const result = verifyPass('any input', [
            input => false
        ]);

        expect(result).toBeFalsy();
    });
    test('one passing rule, passes', () => {
        const result = verifyPass('any input', [
            input => true
        ]);

        expect(result).toBeTruthy();
    });
})