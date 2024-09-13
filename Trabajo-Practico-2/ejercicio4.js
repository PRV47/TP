function añoASiglo(año) {
    if (año < 0) {
        return 0;
    }
    return Math.floor((año-1)/100) + 1;
}

module.exports = añoASiglo