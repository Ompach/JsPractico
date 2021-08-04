//Codigo del Cuadrado//
console.group('cuadrado')
// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

function  perimetroCuadrado(lado){
return lado * 4;
    
} 


// console.log(`El perimetro del cuadrado es: ${perimetroCuadrado} cm`);

// const AreaCuadrado = ladoCuadrado * ladoCuadrado;

function  areaCuadrado(lado){
    return lado * lado;
        
    } 
    

// console.log(`El area del cuadrado es: ${AreaCuadrado} cm^2`);

console.groupEnd();
//Codigo del Cuadrado//

//Codigo del Triangulo//

console.group('Trinagulo')
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;


// console.log(`Los lados del triangulo miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm, ${baseTriangulo} cm `);

// console.log(`La altura del triangulo es es: ${alturaTriangulo} cm`);
 

function  perimetroTriangulo (lado1 , lado2 , base){
return lado1 + lado2 + base;
} 

// console.log(`El perimetro del triangulo es: ${perimetroTriangulo} cm`);

function areaTriangulo (base, altura){

    return (base* altura) / 2;
} 


// console.log(`El área del triangulo es: ${areaTriangulo} cm^2`);


console.groupEnd();

//Codigo del Triangulo//


//Codigo del circulo//

console.group('Circulo')

// const radioCirculo = 4;

function diametroCirculo (radio){
    
    return radio * 2; 
}

const pi = Math.PI;

// console.log(`EL radio del circulo es: ${radioCirculo} cm` )


// console.log(`EL diametro del circulo es: ${diametroCirculo} cm`)

function perimetroCirculo (radio){

    const diametro = diametroCirculo(radio)
    return diametro * pi;

}

function areaCirculo (radio){
    return (radio * radio) * pi;
}



  

console.groupEnd();