import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
  // Con pure false , la pipe se va a actualizar o va a hacer su proceso
  // Cada vez que detecte un cambio en el teclado osea letra por letra
  // Es util pero merma mucho el performance[TENER MUCHO CUIDADO]
})
// Este pipe busca en un array y las coincidencias las muestra si no no
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value.length === 0){
      return value;
    }
    // Aqui creamos un array el cual vamos a llenar con los valores que allemos
    // Que coincidan con el filtro
    let resultArray = [];
    // hacemos un for para recorrer la lista o quiza no lista que recibamos
    for (let item of value){
      // Esto lo que hace es verificar si la palabra que recibe coincide con alguna de las palabras
      // dentro del array osea filtra
      if (item.match('^.*' + args[0]+'.*$')){
        // Si encuentra una coincidencia, entonces lo lanza al array que vamos a devolver
        // que mostrara las coincidencias que encontremos
        resultArray.push(item);
      }
    }// regresamos las coincidencias
    return resultArray;
  }

}
