const {addition,subtraction,multiplication} = require("../module/calculator")

test('Adding two numbers', async () => {
    expect(addition([1, 2])).toBe(3);
})
test('Adding two numbers', async () => {
    expect(subtraction([1, 2])).toBe(1);
})
test('Adding two numbers', async () => {
    expect(multiplication([12, 2])).toBe(24);
})