import { Component } from '@angular/core'

// se crea un componente de contador que hicimos, ponemos export para usarla en otros lados y que no se 
// quede aquí atorado

@Component({

    selector: 'app-contador',
    template: `

<h1>{{title}}</h1> 
<h3>La base es: <strong> 5 </strong></h3>

<button (click)="acumular(-base)"> - {{base}}</button>

<span> {{numero}} </span>

<button (click)="acumular(base)"> + {{base}}</button>
  
    `
    

})

export class ContadorComponent{

    title:string = 'Contador App';
    numero = 10;
    base:number = 5;
  
    // en esta función que creamos, se declara valor 
    // dentro de acumular, pero no tenemos en cuanto
    // inicializa y para eso lo ponemos en el lado del
    //click
   acumular (valor:number){
    this.numero += valor;

  


}
}