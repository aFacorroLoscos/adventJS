const cyberReindeer = require('./main.js')

test('Test Case 1', () => {
    expect(cyberReindeer('S..|...|..', 10)).toStrictEqual([
        "S..|...|..",
        ".S.|...|..",
        "..S|...|..",
        "..S|...|..",
        "..S|...|..",
        "...S...*..",
        "...*S..*..",
        "...*.S.*..",
        "...*..S*..",
        "...*...S.."
      ]);
});

test('Test Case 2', () => {
    expect(cyberReindeer('S.|.', 4)).toStrictEqual([
        "S.|.",
        ".S|.",
        ".S|.",
        ".S|."
      ]);
});

test('Test Case 3', () => {
    expect(cyberReindeer('S.|.|.', 7)).toStrictEqual([
        "S.|.|.",
        ".S|.|.",
        ".S|.|.",
        ".S|.|.",
        ".S|.|.",
        "..S.*.",
        "..*S*."
      ]);
});

test('Test Case 4', () => {
    expect(cyberReindeer('S.|..', 6)).toStrictEqual([
        "S.|..",
        ".S|..",
        ".S|..",
        ".S|..",
        ".S|..",
        "..S.."
      ]);
});

test('Test Case 5', () => {
    expect(cyberReindeer('S.|.|.|......|.||.........', 8)).toStrictEqual([
        "S.|.|.|......|.||.........",
        ".S|.|.|......|.||.........",
        ".S|.|.|......|.||.........",
        ".S|.|.|......|.||.........",
        ".S|.|.|......|.||.........",
        "..S.*.*......*.**.........",
        "..*S*.*......*.**.........",
        "..*.S.*......*.**........."
      ]);
});