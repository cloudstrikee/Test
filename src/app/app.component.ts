import { Component } from '@angular/core';
import { DoublePipe } from "./double.pipe";
import { FilterPipe } from "./filter.pipe";

@Component({
  moduleId: module.id,
  selector: 'jc-root',
  templateUrl: 'app.component.html',
  styles: [`
    .pipes{
      margin: 32px;
      padding: 32px;
    }
  `],
  pipes: [DoublePipe,FilterPipe]
})
export class AppComponent {
  myValue = 'lowercase';
  myDate = new Date(2016,5,24);
  values = ['casa','besar','Cesar'];
  // Esto lo que hace es espera 2 segundos y despues llena asyncValue con datos
  // Osea no se va a setear el valor hasta despues de 2 sgundos
  asyncValue = new Promise((resolve,reject) =>{
    setTimeout(() => resolve('Data is here'),2000);
  });
}
