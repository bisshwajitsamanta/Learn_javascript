const cloneArray = require("./cloneArray");

describe("Test Arrays",()=>{
    it ("Test the values inside the arrays are equal",()=>{
        const array = [1,2,3]
        expect(cloneArray(array)).toEqual(array)
    })
    it("Not the same Array but returns a clone of the array",()=>{
        const array = [4,5,6]
        expect(cloneArray(array)).not.toBe(array)
    })
})

