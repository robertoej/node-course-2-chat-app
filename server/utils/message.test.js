const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        const from = 'Roberto';
        const lat = 1;
        const long = -1;

        const response = generateLocationMessage(from, lat, long);

        expect(response). toInclude({from});
        expect(response.createdAt).toBeA('number');
        expect(response.url).toBe(`https://www.google.com/maps?q=${lat},${long}`);
    });
});