const {sum, ParameterizedSum} = require(('./sum'))

test("test sum returns 3",()=>{
    expect(sum()).toBe(3)
})

test("Test sum paramaeterised",() => {
    expect(ParameterizedSum(10,20)).toBe(30)
})

test("Negative Test should not be 200",()=>{
    expect(ParameterizedSum(10,20)).not.toBe(200)
})