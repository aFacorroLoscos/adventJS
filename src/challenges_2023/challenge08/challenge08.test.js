const organizeGifts = require('./main.js')

test('Test Case 1', () => {
    expect(organizeGifts("76a11b")).toStrictEqual("[a]{a}{a}(aaaaaa){b}(b)");
});

test('Test Case 2', () => {
    expect(organizeGifts("20a")).toStrictEqual("{a}{a}");
});

test('Test Case 3', () => {
    expect(organizeGifts("70b120a4c")).toStrictEqual("[b]{b}{b}[a][a]{a}{a}(cccc)");
});

test('Test Case 4', () => {
    expect(organizeGifts("9c")).toStrictEqual("(ccccccccc)");
});

test('Test Case 5', () => {
    expect(organizeGifts("19d51e")).toStrictEqual("{d}(ddddddddd)[e](e)");
});