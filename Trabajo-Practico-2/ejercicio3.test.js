const calcularAgua = require('./ejercicio3');

test("Probando una hora cualquiera", () => {
    expect(calcularAgua(3)).toBe(1);
    expect(calcularAgua(6.7)).toBe(3);
    expect(calcularAgua(11.8)).toBe(5);
})

test("Probando una hora negativa", () => {
    expect(calcularAgua(-1)).toBe(0);
})

test("Probando un string", () => {
    expect(calcularAgua("3")).toBe(1);
})

test("Probando un string negativo", () => {
    expect(calcularAgua("-1")).toBe(0);
})

test("Probando un string vacio", () => {
    expect(calcularAgua("")).toBe(0);
})