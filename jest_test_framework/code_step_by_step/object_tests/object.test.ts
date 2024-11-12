
import {getName} from "./object";

test('Check whether the name is equal to Bisshwajit',()=>{
    expect(getName().name).toEqual('Bisshwajit')
})