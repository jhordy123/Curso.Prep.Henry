// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]; 
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var ultimo = array.length;
  var valor = array[ultimo-1] ; 
  return valor;
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código
  var largo = array.length ; 
  return largo; 

}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
   for(let i = 0 ; i< array.length ; i++){
      array[i] +=1 ;  
   }

   return array ; 

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
    
    array.push(elemento); 

    return array;

}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento); 
  return array;
  
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var tamaño = palabras.length ;
  for(let j = 0; j<tamaño-1; j++){
      palabras[j] += " ";
  }

  var oracion = palabras[0];  
  for(let i = 1; i< tamaño ; i++){
      oracion += palabras[i];
  }
  
  return oracion ; 


}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(let i = 0 ; i< array.length ; i++){
      if(array[i] === elemento){
        return true; 
      }
  }
  return false ; 

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código: 

  var tamaño = numeros.length; 
  var suma = 0; 
  for(let i = 0; i<numeros.length ; i++){
      suma += numeros[i] ;
  }
  return suma ; 

}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var tamaño = resultadosTest.length; 
  var suma = 0; 
  for(let i = 0; i<resultadosTest.length ; i++){
      suma += resultadosTest[i] ;
  }

  return suma/tamaño; 
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var tamaño = numeros.length; 
  var aux ; 
  var s = 1 ; 
  while((s == 1) && (--tamaño >0)){
    s = 0 ; 
    for(let i = 1; i<=tamaño; i++){
        if (numeros[i-1] > numeros[i]){
            aux = numeros[i-1] ;
            numeros[i-1] = numeros[i];
            numeros[i] = aux; 
            s = 1;
        };
    }
  }
  var mayor = numeros.length -1; 
  return numeros[mayor]; 

}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  // la palabra reservada "arguments" hace referencia a un arreglo de valores con los argumentos
   var valor = 1 ; 
   if(arguments.length === 0 ){
      return 0;
   }
   else if (arguments.length === 1){
      return arguments[0] ;
   }
   else {
      for(let i = 0 ; i <arguments.length ;i++){
        valor = valor * arguments[i];
      }
      return valor ;
   } 
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var tamaño = arreglo.length;
  var cantidad = 0 ;
  for(let i = 0 ; i<tamaño; i++){
      if(arreglo[i]>18){
         cantidad++;
      }

  }
  
  return cantidad ; 


}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   

  var dia_laboral = 0 ; 
  var dia_fin_semana = 0  ; 
  switch(numeroDeDia){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      dia_laboral = "Es dia Laboral";
      break;
    case 1: 
    case 7:
      dia_fin_semana = "Es fin de semana";
      break;
  }

  if(dia_laboral === "Es dia Laboral"){
    return "Es dia Laboral"
  }
  else{
    return "Es fin de semana";
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aque
  var valor = [];
  valor = n.toString();
  if(valor[0] === "9"){
      return true ;
  }
  else{
    return false ;
  }
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var cantidad = 0 ;
  var tamaño = arreglo.length; 
   for(let i = 1 ; i<tamaño ;i++){
      if(arreglo[0]===arreglo[i]){  
        cantidad++;
      } 
   }
   if(cantidad === arreglo.length-1){
      return true ; 
   }
   else{
    return false;
   }

} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var tamaño = array.length; 
  var nuevo = []; 
  var contador = 0 ; 

  for(let i = 0; i< tamaño ; i++){
    if((array[i] === "Enero") || (array[i] === "Noviembre") || (array[i] === "Marzo")){
          nuevo[contador] = array[i];
          contador++; 
    };

  }

  var meses_econtrados = nuevo.length ; 
  if(meses_econtrados === 3){
    return nuevo ;
  }
  else{
    return "No se encontraron los meses pedidos";
  }

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var contador = 0;
  var nuevo = [];
  var tamaño = array.length; 
  for(let i = 0; i<tamaño;i++){
    if(array[i]>100){
       nuevo[contador]= array[i];
       contador++;
    }
  }
  return nuevo;



}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var suma = 0 ; 
  var contador = 1;
  var nuevo = [];
  var contador = 0 ;
  for(let i = 1 ; i<=10; i++){
    numero = numero + 2;
    if(numero === i){
        return "Se interrumpió la ejecución";
    }
    nuevo[contador] = numero;
    contador++;
  }
  
  return nuevo ; 

}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var nuevo = [];
  var contador = 0 ; 

  for(let i = 0; i<10;i++){
    if(i === 4){
      continue;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    }
    numero +=2;
    nuevo[contador] = numero;
    contador++;
  }
  return nuevo; 

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
