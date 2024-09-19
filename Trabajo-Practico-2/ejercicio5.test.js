const determinarGanador = require('./ejercicio5');

test("Probando una jugada cualquiera", () => {
    expect(determinarGanador("piedra", "tijera")).toBe("Jugador 1 gana!");
    expect(determinarGanador("papel", "piedra")).toBe("Jugador 1 gana!");
    expect(determinarGanador("tijera", "papel")).toBe("Jugador 1 gana!");
    expect(determinarGanador("piedra", "papel")).toBe("Jugador 2 gana!");
    expect(determinarGanador("papel", "tijera")).toBe("Jugador 2 gana!");
    expect(determinarGanador("tijera", "piedra")).toBe("Jugador 2 gana!");
    expect(determinarGanador("piedra", "piedra")).toBe("Empate!");
    expect(determinarGanador("papel", "papel")).toBe("Empate!");
    expect(determinarGanador("tijera", "tijera")).toBe("Empate!");
})

test("Probando una jugada vacia", () => {
    expect(determinarGanador("", "")).toBe("Jugada no valida. Nadie gana");
})

test ("Probando una jugada null", () => {
    expect(determinarGanador(null, null)).toBe("Jugada no valida. Nadie gana");
})

test ("Probando una jugada undefined", () => {
    expect(determinarGanador(undefined, undefined)).toBe("Jugada no valida. Nadie gana");
})

test ("Probando una jugada mal escrita", () => {
    expect(determinarGanador("piedraaaa", "tiiiijera")).toBe("Jugada no valida. Nadie gana");
})