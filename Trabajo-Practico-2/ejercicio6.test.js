const validadorDeDirecciones = require('./ejercicio6');

let direccion1 = {
    street: "Alberdi",
    number: 123,
    floor_apartment: 2,
    zipCode: 12345,
    town: "Dorrego",
    city: "Mendoza",
    province: "Mendoza"
}

let direccion2 = {
    street: "",
    number: "numero",
    floor_apartment: 2,
    zipCode: 12345,
    town: "Dorrego",
    city: undefined,
    province: "Mendoza"
}

test ("Probando una direccion cualquiera", () => {
    expect(validadorDeDirecciones(direccion1)).toBe(true);
    expect(validadorDeDirecciones(direccion2)).toBe(false);
})

test ("Probando una direccion vacia", () => {
    expect(validadorDeDirecciones({})).toBe(false);
})

test ("Probando una direccion null", () => {
    expect(validadorDeDirecciones(null)).toBe(false);
})

test ("Probando una direccion undefined", () => {
    expect(validadorDeDirecciones(undefined)).toBe(false);
})

test ("Probando una entrada cualquiera en lugar de la direccion", () => {
    expect(validadorDeDirecciones(1)).toBe(false);
    expect(validadorDeDirecciones("hola")).toBe(false);
})

