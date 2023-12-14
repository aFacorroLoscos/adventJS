function findFirstRepeated(gifts) {
    // Code here
    let repeatedNumbers = new Set();
    for (const number of gifts){
        if (repeatedNumbers.has(number)) return number
        repeatedNumbers.add(number)
    }
    return -1
}
module.exports = findFirstRepeated;  