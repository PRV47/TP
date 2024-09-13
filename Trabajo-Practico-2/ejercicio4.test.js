const añoASiglo = require('./ejercicio4');

test ("Probando un año cualquiera", () => {
    expect(añoASiglo(1971)).toBe(20);
})

test ("Probando el año 1", () => {
    expect(añoASiglo(1)).toBe(1);
})

test ("Probando strings en lugar de numeros", () => {
    expect(añoASiglo("2000")).toBe(20);
})

test ("Probando null", () => {
    expect(añoASiglo(null)).toBe(0);
})

test ("Probando año negativo", () => {
    expect(añoASiglo(-2000)).toBe(0);
})