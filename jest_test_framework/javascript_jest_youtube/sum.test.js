const sum = require('./sum')


describe('Testing 2 numbers',()=>{
    test('Properly adds two numbers',()=>{
        expect(sum(1,2)).toBe(3)
    })
    test('Numbers should not be empty',()=>{
        expect(sum()).not.toBe('')
    })
})
