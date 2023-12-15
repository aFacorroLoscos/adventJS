const findFirstRepeated = require('./main.js')

test('Test Case 1', () => {
    expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toStrictEqual(3);
});

test('Test Case 2', () => {
    expect(findFirstRepeated([2, 2])).toStrictEqual(2);
});

test('Test Case 3', () => {
    expect(findFirstRepeated([2, 4, 3, 5, 1])).toStrictEqual(-1);
});

test('Test Case 4', () => {
    expect(findFirstRepeated([1, 3, 4, 5, 0, 1, 3, 0, 7])).toStrictEqual(1);
});

test('Test Case 5', () => {
    expect(findFirstRepeated([])).toStrictEqual(-1);
});

test('Test Case 6', () => {
    expect(findFirstRepeated([10, 20, 30])).toStrictEqual(-1);
});

test('Test Case 7', () => {
    expect(findFirstRepeated([5, 1, 2, 3, 2, 5, 1])).toStrictEqual(2);
});

test('Test Case 8', () => {
    expect(findFirstRepeated([1, 10, 2, 10, 20, 50, 7, 0, 0, 7])).toStrictEqual(10);
});
