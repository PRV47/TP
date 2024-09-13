const volumenTanque = require('./ejercicio2');

test("Validar volumen del tanque en mm", () => {
    expect(volumenTanque(10, 20, "m")).toBeCloseTo(1570796.32679);
})

test("Validar volumen del tanque en cm", () => {
    expect(volumenTanque(10, 20, "cm")).toBeCloseTo(1.57);
})

test("Validar volumen del tanque sin unidad, debe asumir cm", () => {
    expect(volumenTanque(10, 20)).toBeCloseTo(1.57);
})

test("Validar volumen de un tanque muy pequeño", () => {
    expect(volumenTanque(0.001, 0.001, "cm")).toBeCloseTo(0);
})

test("Validar volumen de un tanque muy grande", () => {
    expect(volumenTanque(100000, 100000, "m")).toBeCloseTo(785398163397448309.62);
})