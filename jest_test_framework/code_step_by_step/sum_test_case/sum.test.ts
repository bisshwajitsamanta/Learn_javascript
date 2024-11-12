

import {sum} from "./sum";
// import exp from "node:constants";


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3); // Correct usage of expect
});

test('add 1+2 to not equal 4',()=>{
    expect(sum(1,3)).not.toBe(5)
});