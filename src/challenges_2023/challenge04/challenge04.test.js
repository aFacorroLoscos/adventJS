const decode = require('./main.js')

test('Test Case 1', () => {
    expect(decode('hola (odnum)')).toStrictEqual("hola mundo");
});

test('Test Case 2', () => {
    expect(decode('(olleh) (dlrow)!')).toStrictEqual("hello world!");
});

test('Test Case 3', () => {
    expect(decode('sa(u(cla)atn)s')).toStrictEqual("santaclaus");
});

test('Test Case 4', () => {
    expect(decode('((nta)(sa))')).toStrictEqual("santa");
});