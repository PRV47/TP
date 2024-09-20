function validadorDeDirecciones (direccion) {
    if (direccion === null || direccion === undefined) {
        return false;
    }
    if (typeof direccion.street !== 'string' || direccion.street.length === 0) {
        return false;
    }
    if (typeof direccion.number !== 'number' || direccion.number.length === 0) {
        return false;
    }
    if (typeof direccion.zipCode !== 'number' || direccion.zipCode.length === 0) {
        return false;
    }
    if (typeof direccion.city !== 'string' || direccion.city.length === 0) {
        return false;
    }
    if (typeof direccion.province !== 'string' || direccion.province.length === 0) {
        return false;
    }
    return true;
    }


module.exports = validadorDeDirecciones