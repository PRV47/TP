function volumenTanque(diametro, altura, unidad = "cm") {
    if (unidad === "m") {
        diametro = diametro * 100;
        altura = altura * 100;
    }

    const radio = diametro / 2;
    //const areaCilindro = Math.PI * radio * radio * altura;
    //const volumen = areaCilindro * 0.5;
    //return volumen;

    const volumenCm3 = Math.PI * Math.pow(radio, 2) * altura;
    const volumenL = volumenCm3 * 0.001; //convierte a litros
    return volumenL 
}

module.exports = volumenTanque