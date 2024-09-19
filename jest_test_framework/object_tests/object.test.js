
const name = require('./object_name')

test('Testing the Name of the User',()=>{
    expect(name()).toEqual({'name': 'Bisshwajit'})
})