import {greet} from "./callback";


test('greet function calls callback with correct message',()=>{
    const mockCallBack = jest.fn()
    greet('Bisshwajit',mockCallBack)

    expect(mockCallBack).toHaveBeenCalledWith('Hello Bisshwajit');
    expect(mockCallBack).toHaveBeenCalledTimes(1);
})