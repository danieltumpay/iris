//VARIABLES CONSTANTES LOS OBJETOS HTML CON EL ID
const formulario = document.querySelector('.formulario')
const resultado = document.getElementById("resultado");
eventListeners();

function eventListeners(){
    formulario.addEventListener('submit', calculandoIris);
}

function calculandoIris(e){
    e.preventDefault();
    const logSep =  parseFloat(document.querySelector('#logSep').value);
    const logPet =  parseFloat(document.querySelector('#logPet').value);
    const ancSep =  parseFloat(document.querySelector('#ancSep').value);
    const ancPet =  parseFloat(document.querySelector('#ancPet').value);

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
        tipo_iris="iris setosa";
    }else //2,3,4,5 ancPet>0.8
        if(ancPet>0.8 ){//2,3,4 -1.2
            if(ancPet <= 1.75){
                if(logPet>4.95){//3,4
                    if(ancPet<= 1.55){//3
                        tipo_iris="iris virginica";
                    }else{//4
                        tipo_iris="iris versicolor";
                    }
                }else{//2 - logPet<= 4.95 
                    tipo_iris="iris versicolor";
                }
            }else{//5. ancPet >1.75 y ancPet>0.8 
                tipo_iris="iris virginica";
            }
        }
    console.log(logSep);
    console.log(logPet);
    console.log(ancSep);
    console.log(ancPet);
    console.log("==========");
    console.log(tipo_iris);
    resultado.innerHTML = "La predicción es " + (tipo_iris);
}
/*PRUEBA
boton.addEventListener('click', () => {
    let res = parseFloat(logSep.value) + parseFloat(logPet.value);
    resultado.innerHTML = "La predicción es " + (res);
})*/