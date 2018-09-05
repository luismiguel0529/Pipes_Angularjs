import { Component } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'url';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  nombre = "Luis Miguel";
  nombre2 = "LuIS Miguel RodriGUEz Herrera";
  arreglo=[1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;


  heroe= {
    nombre: "wolverin",
    clave :"logan",
    edad:50,
    direccion:{
      calle:"numero13",
      casa:40
    }
  }

  valorPromesa = new Promise( (resolve,reject) =>{
    setTimeout( ()=>resolve('llego la data!'),1000);

  })

fecha = new Date;

video = "21hoWeMro6Y";
activar:boolean=true;

}
