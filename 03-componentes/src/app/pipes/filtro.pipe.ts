import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(areglo: any[], texto: string, columna: string): any[] {
    if (texto === ''){
      return areglo;
    }
    texto=texto.toLowerCase();
   return areglo.filter(item=>{
      return item[columna].toLowerCase().includes(texto)
    });
    
  }

}
