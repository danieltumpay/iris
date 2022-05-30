//VARIABLES CONSTANTES LOS OBJETOS HTML CON EL ID
const resultado = document.getElementById("resultado");

//PRUEBA
boton.addEventListener('click', () => {
    let res = parseFloat(logSep.value) + parseFloat(logPet.value);
    resultado.innerHTML = "La predicción es " + (res);
})