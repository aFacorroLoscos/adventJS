const findNaughtyStep = require('./main.js')

test('Test Case 1', () => {
    expect(findNaughtyStep('abcd', 'abcde')).toStrictEqual("e");
});

test('Test Case 2', () => {
    expect(findNaughtyStep('abcde', 'abcd')).toStrictEqual("e");
});

test('Test Case 3', () => {
    expect(findNaughtyStep('xxxx', 'xxoxx')).toStrictEqual("o");
});

test('Test Case 4', () => {
    expect(findNaughtyStep('stepfor', 'stepor')).toStrictEqual("f");
});

test('Test Case 5', () => {
    expect(findNaughtyStep('iiiii', 'iiiii')).toStrictEqual("");
});
