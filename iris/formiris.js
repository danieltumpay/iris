//VARIABLES CONSTANTES LOS OBJETOS HTML CON EL ID
const formulario = document.querySelector('.formulario');
const resultado = document.getElementById("resultado");
const spinner = document.querySelector('.spinner');
const imagen = document.getElementById("imgf");

eventListeners();

function eventListeners(){
    formulario.addEventListener('submit', calculandoIris);
}

function calculandoIris(e){
    e.preventDefault();
    spinner.style.display='flex';
    resultado.style.display='none';
    const logSep =  parseFloat(document.querySelector('#logSep').value);
    const logPet =  parseFloat(document.querySelector('#logPet').value);
    const ancSep =  parseFloat(document.querySelector('#ancSep').value);
    const ancPet =  parseFloat(document.querySelector('#ancPet').value);

    const formulario2 = document.querySelector('.formulario2');
    formulario2.style.display='flex';

    reglas(logSep,logPet,ancSep,ancPet);
    
}

function reglas(logSep,logPet,ancSep,ancPet){
    //1. ancPet<=0.8 y TRUE => "iris setosa"
    //2. logPet<= 4.95 y ancPet <= 1.75 y ancPet>0.8 =>"iris versicolor"
    //3. ancPet<= 1.55 y logPet>4.95 y ancPet <= 1.75 y ancPet>0.8 =>" iris  virginica"
    //4. ancPet>1.55 y logPet>4.95 y ancPet <= 1.75 y ancPet>0.8 => "iris versicolor"
    //5. ancPet >1.75 y ancPet>0.8  => " iris  virginica"
    let tipo_iris='';
    if(ancPet<=0.8){//1
        tipo_iris="Iris Setosa";
    }else //2,3,4,5 ancPet>0.8
        if(ancPet>0.8 ){//2,3,4 -1.2
            if(ancPet <= 1.75){
                if(logPet>4.95){//3,4
                    if(ancPet<= 1.55){//3
                        tipo_iris="Iris Virginica";
                    }else{//4
                        tipo_iris="Iris Versicolor";
                    }
                }else{//2 - logPet<= 4.95 
                    tipo_iris="Iris Versicolor";
                }
            }else{//5. ancPet >1.75 y ancPet>0.8 
                tipo_iris="Iris Virginica";
            }
        }
    console.log(logSep);
    console.log(logPet);
    console.log(ancSep);
    console.log(ancPet);
    console.log("==========");
    console.log(tipo_iris);
    //resultado.innerHTML = "La predicción es " + (tipo_iris);
    mostrarResultado(tipo_iris);
}

function mostrarResultado(tipo_iris){
    setTimeout(() => {
        spinner.style.display='none';

        resultado.innerHTML = `<span>La predicción es "<strong>${tipo_iris}</strong></span>"`;
        resultado.style.display='flex';
    }, 2000);
}

/*Expresiones regulares 
const form = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const validarFormulario = (e) => {
    console.log('Se ejecutó');
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


/*const expresiones = {
	logSep: /^\d{1,3}$/, // 7 a 14 numeros.
    logPet: /^\d{1,3}$/,
    ancSep: /^\d{1,3}$/,
    ancPet: /^\d{1,3}$/
}

const campos = {
	logSep: false,
    logPet: false,
    ancSep: false,
    ancPet: false
}



*/


/*PRUEBA
boton.addEventListener('click', () => {
    let res = parseFloat(logSep.value) + parseFloat(logPet.value);
    resultado.innerHTML = "La predicción es " + (res);
})*/