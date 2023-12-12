function obtenerFraseAleatoria(listaFrases) {
    const indiceAleatorio = Math.floor(Math.random() * listaFrases.length);
    return listaFrases[indiceAleatorio];
}

function crearPoesia() {
    const nombrePlanta = document.getElementById('nombrePlanta').value;
    const nombreAnimal = document.getElementById('nombreAnimal').value;
    const mensajeError = document.getElementById('poesiaError');

    if (nombrePlanta === '' || nombreAnimal === '') {
        mensajeError.style.color = 'red';
        mensajeError.textContent = 'Please, enter an animal and a plant.';
        return;
    } else if (nombrePlanta === '' || nombreAnimal === '') {
        document.getElementById('tituloPoesia').textContent = '';
        return
    }


    const frasesPoesia1 = [
        `En el jardín, la ${nombrePlanta} y el ${nombreAnimal} juegan,
        bajo el sol que brilla y los árboles que danzan.`,
        `El aroma de la ${nombrePlanta} se mezcla con el ${nombreAnimal},
        creando una sinfonía en el jardín que encanta.`,
        // Añadir más frases aquí para la poesía 1
    ];

    const frasesPoesia2 = [
        `Bajo el cielo azul, la ${nombrePlanta} y el ${nombreAnimal} caminan,
        entre flores y colores, danzan en la pradera.`,
        `La ${nombrePlanta} y el ${nombreAnimal} se encuentran en armonía,
        en un universo de paz, amor y fantasía.`,
        // Añadir más frases aquí para la poesía 2
    ];

    const poesiaAleatoria1 = obtenerFraseAleatoria(frasesPoesia1);
    const poesiaAleatoria2 = obtenerFraseAleatoria(frasesPoesia2);

    const listaPoesias = [poesiaAleatoria1, poesiaAleatoria2];
    const poesiaAleatoriaFinal = obtenerFraseAleatoria(listaPoesias);

    document.getElementById('tituloPoesia').textContent = `El ${nombrePlanta} y el ${nombreAnimal}`;
    document.getElementById('poesia').textContent = poesiaAleatoriaFinal;
}

function resetear() {
    document.getElementById('nombrePlanta').value = '';
    document.getElementById('nombreAnimal').value = '';
    document.getElementById('tituloPoesia').textContent = '';
    document.getElementById('poesia').textContent = '';
    document.getElementById('poesiaError').textContent = '';
}




