const adjustLights = require('./main.js')

test('Test Case 1', () => {
    expect(adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"])).toStrictEqual(1);
});

test('Test Case 2', () => {
    expect(adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"])).toStrictEqual(2);
});

test('Test Case 3', () => {
    expect(adjustLights(["🔴", "🔴", "🟢", "🔴", "🟢"])).toStrictEqual(1);
});

test('Test Case 4', () => {
    expect(adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"])).toStrictEqual(0);
});

test('Test Case 5', () => {
    expect(adjustLights(["🔴", "🔴", "🔴"])).toStrictEqual(1);
});