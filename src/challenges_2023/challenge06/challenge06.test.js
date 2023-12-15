const maxDistance = require('./main.js')

test('Test Case 1', () => {
    expect(maxDistance(">>*<")).toStrictEqual(2);
});

test('Test Case 2', () => {
    expect(maxDistance("<<<<<")).toStrictEqual(5);
});

test('Test Case 3', () => {
    expect(maxDistance(">***>")).toStrictEqual(5);
});

test('Test Case 4', () => {
    expect(maxDistance("**********")).toStrictEqual(10);
});

test('Test Case 5', () => {
    expect(maxDistance("<<**>>")).toStrictEqual(2);
});