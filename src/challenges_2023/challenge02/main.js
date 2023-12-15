function manufacture(gifts, materials) {
    // Code here
    return gifts.filter(x => x.match("^[" + materials + "]+$") != null)
}
module.exports = manufacture;  