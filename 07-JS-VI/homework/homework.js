// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  
  function f_Dcambio(nombre){
       var tamaño = nombre.length ;  //toUpperCase()
       var nuevo = nombre[0].toUpperCase() + nombre.slice(1,tamaño);
       return nuevo ;  
  };

  function cambiarLetra(valor, cb){
       return cb(valor);
  };
  
  var resultado = cambiarLetra(nombre,f_Dcambio)

  return resultado ; 

}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2);

}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var valor = numeros.reduce(function(acumulador,elemento){ // acumulador de la suma total 
                    return acumulador + elemento ;           // elemento = cada elemento del array.
               },0)

  cb(valor);

}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:

    array.forEach((elemento) => {   // function(elemento){}
          cb(elemento);
    });

}

function map(array, cb){
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var nuevoArray = array.map(function(elemento){
                        return cb(elemento);
                  });
    return nuevoArray ; 
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
   
 var valor = array.filter((words) => {
                  return (words[0]==="a");
              }) 

  return valor;

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
