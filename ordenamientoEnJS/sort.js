// array.sort(function(a, b){   =>decimos que a es menor que b
//    busqueda especifica
//});
//--Busqueda del menor en un array
let numbers = [2, 3, 43, 22, 1, 0, 44, 55, 3, 1, 0];

numbers.sort((a, b) => {
  if (a == b) {
    return 0;
  }
  if (a < b) {
    return -1;
  }
  return 1;
});
console.log(numbers);

//--Busqueda del mayor en un array
let numbers = [2, 3, 43, 22, 1, 0, 44, 55, 3, 1, 0];

numbers.sort((a, b) => {
  if (a == b) {
    return 0;
  }
  if (a > b) {
    return -1;
  }
  return 1;
});
console.log(numbers);

//--Orden alfabetico 

let palabras = ['paula','Carina', 'sofia', 'Marta', 'Carlos'];
palabras.sort((a, b) => {
  a=a.toLocaleLowerCase();
  b=b.toLocaleLowerCase();
  if (a == b) {
    return 0;
  }
  if (a > b) {        //'<'orden alfabetico inverso
    return -1;
  }
  return 1;
});
console.log(palabras);

//--Ordena los mayores de 1.000

let numbersGreaterThan1000= [700, 6000, 800, 300, 1023, 125, 1000, 1001, 40, 13];
numbersGreaterThan1000.sort((a,b)=>{
  if(a<=1000){
    return 1;
  }
  return -1;
});

//--Ordenamiento de arrays de objetos
