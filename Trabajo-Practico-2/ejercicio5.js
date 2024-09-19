function determinarGanador(jugador1, jugador2) {

    if (jugador1 === "" || jugador2 === "") {
        return "Jugada no valida. Nadie gana";
    }

    if (typeof jugador1 !== 'string' || typeof jugador2 !== 'string') {
        return "Jugada no valida. Nadie gana";
    }

    if (jugador1 === jugador2) {
        return "Empate!";
    } else if ((jugador1 === "piedra" && jugador2 === "tijera") || (jugador1 === "tijera" && jugador2 === "papel") || (jugador1 === "papel" && jugador2 === "piedra")) {
        return "Jugador 1 gana!";
    } else if (["piedra", "papel", "tijera"].indexOf(jugador1) === -1 || ["piedra", "papel", "tijera"].indexOf(jugador2) === -1) {
        return "Jugada no valida. Nadie gana";
    } else {
        return "Jugador 2 gana!";
    }
}

module.exports = determinarGanador