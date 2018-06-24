const expect = require('expect');
const {isRealString} = require('./validation');

// import isRealString
// isRealString
    // should reject non-string values
    // should reject strings with only spaces
    // should allow strings with non-space characters

describe('isRealString', () => {
    it('should reject non-string values', () => {
        expect(isRealString(1)).toBe(false);
    });

    it('should reject string with only spaces', () => {
        expect(isRealString('')).toBe(false);
    });

    it('should allow strings with non-space characters', () => {
        expect(isRealString('a')).toBe(true);
    });
});