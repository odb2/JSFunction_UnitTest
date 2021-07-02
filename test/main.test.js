const assert = require('assert');
const mainfunc = require('../main');

describe('main.js tests', () => {
    describe('repeated_strings() Test', () =>{
        it('should return 5', () => {
            const result = mainfunc.repeated_strings(['abc', '123', '123', '123', 'ABC', 'xyz']);
            assert.strictEqual(result,5)
        });
        it('should return 6', () => {
            const result = mainfunc.repeated_strings(['abcabc', 'abc', '123', '123', 'Abc', 'ABC','', '','123']);
            assert.strictEqual(result,6)
        });
        it('should return 2', () => {
            const result = mainfunc.repeated_strings(['abc', [5,5,'breaking'], [5,5,'breaking'], 5, 'abc']);
            assert.strictEqual(result,2)
        });
        it('should return 2', () => {
            const result = mainfunc.repeated_strings(['abc', 5, 'abc', [], []]);
            assert.strictEqual(result,2)
        });
        it('should return 3', () => {
            const result = mainfunc.repeated_strings(['12', ' ', 12, ' ', '12','12']);
            assert.strictEqual(result,3)
        });
        it('should return 0', () => {
            const result = mainfunc.repeated_strings([]);
            assert.strictEqual(result,0)
        });
    });
});