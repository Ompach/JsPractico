//Codigo del Cuadrado//
console.group('cuadrado')
// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

function  perimetroCuadrado(lado){
return lado * 4;
    
} 


// console.log(`El perimetro del cuadrado es: ${perimetroCuadrado} cm`);

// const AreaCuadrado = ladoCuadrado * ladoCuadrado;

function  areatroCuadrado(lado){
    return lado * lado;
        
    } 
    

// console.log(`El area del cuadrado es: ${AreaCuadrado} cm^2`);

console.groupEnd();
//Codigo del Cuadrado//

//Codigo del Triangulo//

console.group('Trinagulo')
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;


console.log(`Los lados del triangulo miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm, ${baseTriangulo} cm `);

console.log(`La altura del triangulo es es: ${alturaTriangulo} cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log(`El perimetro del triangulo es: ${perimetroTriangulo} cm`);

const areaTriangulo = (baseTriangulo* alturaTriangulo) / 2;

console.log(`El área del triangulo es: ${areaTriangulo} cm^2`);


console.groupEnd();

//Codigo del Triangulo//


//Codigo del circulo//

console.group('Circulo')

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const pi = Math.PI;

console.log(`EL radio del circulo es: ${radioCirculo}`)


console.log(`EL diametro del circulo es: ${diametroCirculo}`)

const perimetroCirculo = diametroCirculo * pi;

console.log(`EL perimetro del circulo es: ${perimetroCirculo}`)

const areaCirculo = (radioCirculo*radioCirculo)*pi;

console.log(`EL area del circulo es: ${areaCirculo}`);





console.groupEnd();