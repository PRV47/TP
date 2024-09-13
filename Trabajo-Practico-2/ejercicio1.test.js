const validarCodigoPIN = require("./ejercicio1");

test("Validar longitud", () => {
    expect(validarCodigoPIN("1234")).toBe(true);
    expect(validarCodigoPIN("12345")).toBe(false);
    expect(validarCodigoPIN("123456")).toBe(true);
    expect(validarCodigoPIN("1234567")).toBe(false);
})

test("Validar numero", () => {
    expect(validarCodigoPIN("123456")).toBe(true);
    expect(validarCodigoPIN("AAAAAA")).toBe(false);
})

test ("Validar PIN vacio", () => {
    expect(validarCodigoPIN("")).toBe(false);
})

test ("Validar PIN null", () => {
    expect(validarCodigoPIN(null)).toBe(false);
})

test ("Validar PIN undefined", () => {
    expect(validarCodigoPIN(undefined)).toBe(false);
})