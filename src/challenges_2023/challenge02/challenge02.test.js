const manufacture = require('./main.js')

test('Test Case 1', () => {
    expect(manufacture(['tren', 'oso', 'pelota'], 'tronesa')).toStrictEqual(["tren","oso"]);
});

test('Test Case 2', () => {
    expect(manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb')).toStrictEqual([]);
});

test('Test Case 3', () => {
    expect(manufacture(['patineta', 'robot', 'libro'], 'nopor')).toStrictEqual([]);
});

test('Test Case 4', () => {
    expect(manufacture([], 'letras')).toStrictEqual([]);
});
