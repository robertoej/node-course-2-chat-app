const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        // store response
        const from = 'Roberto';
        const text = 'Hey, there!';

        const response = generateMessage(from, text);
        // expect(response.from).toBe(from);
        // expect(response.text).toBe(text);
        expect(response).toInclude({from, text});
        expect(response.createdAt).toBeA('number');
    });
});