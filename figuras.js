//Codigo del Cuadrado//


function  perimetroCuadrado(lado){
return lado * 4;
    
} 



function  areaCuadrado(lado){
    return lado * lado;
        
    } 
    

 

function  perimetroTriangulo (lado1 , lado2 , base){
    return Number(lado1) + Number(lado2) + Number(base);
} 



function areaTriangulo (base, altura){

    return (base* altura) / 2;
} 




// const radioCirculo = 4;

function diametroCirculo (radio){
    
    return radio * 2; 
}

const pi = Math.PI;



function perimetroCirculo (radio){

    const diametro = diametroCirculo(radio)
    return diametro * pi;

}

function areaCirculo (radio){
    return (radio * radio) * pi;
}   


//Codigo del Triangulo isósceles.

function alturaIsoceles(lado01, lado02, base){

    if(lado01 === lado02 && lado01 != base){
        const altura =  Math.sqrt(lado01**2 - lado02**2/4);
        alert(`la Altura del triangulo es ${altura}`)

    }
    else{
        alert(`Los lados a y b no son iguales`)
    }
}




// interaccion con HTML

//Cuadrado

function CalcularPerimetroCuadrado(){
 const input = document.getElementById("inputCuadrado")
 const value = input.value;

 const perimetro = perimetroCuadrado (value);

 alert ( ` El perimetro es ${perimetro}`);
}

function CalcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado")
    const value = input.value;
   
    const area = areaCuadrado (value);
   
    alert (` El Area es ${area}`)
}

//Triangulo
 function CalcularPerimetroTriangulo() {
    const ladoA = document.getElementById("inputLadoA");
    const ladoB = document.getElementById("inputLadoB");
    const base = document.getElementById("inputBase");
    

    const valueA = ladoA.value;
    const valueB = ladoB.value;
    const valuebase = base.value;
    

    const PerimetroT = perimetroTriangulo(valueA,valueB,valuebase)

    alert (`El perimetro del Triangulo es ${PerimetroT}` );

 }

 function  CalcularAreaTriangulo(){
    const inBase = document.getElementById("inputBase")
    const inAltura = document.getElementById("inputAltura")

    const Base = inBase.value
    const Altura = inAltura.value;
   
    const Area = areaTriangulo (Base,Altura);
   
    alert ( ` El area es ${Area}`);
   }

 

//Circulo

function CalcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo")
    const value = input.value;
   
    const perimetro = perimetroCirculo (value);
   
    alert ( ` El perimetro es ${perimetro}`);
   }

   function CalcularAreaCirculo(){
    const input = document.getElementById("inputCirculo")
    const value = input.value;
   
    const perimetro = areaCirculo (value);
   
    alert ( ` El Area es ${perimetro}`);
   }

