function validarCodigoPIN(pin) {
    if (pin === null || pin === undefined) {
        return false;
    }

    const esNumero = /^\d+$/.test(pin);
    const longitud = pin.length === 4 || pin.length === 6;


    if (esNumero && longitud) {
        return true;
    } else {
        return false;
    }
}

module.exports = validarCodigoPIN;