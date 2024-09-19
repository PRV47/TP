function calcularAgua(hora) {

    if (hora == null || hora == undefined) {
        return 0;
    }
    if (typeof hora === 'string') {
        hora = parseFloat(hora);
    }
    if (hora < 0 || isNaN(hora)) {
        return 0;
    } else {
        const litros = 0.5 * hora;
        return Math.floor(litros);
    }
}

module.exports = calcularAgua