import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
   
    
})
export class FrutaComponent{
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, manzana, pera';

    public nombre:String;
    public edad:number;
    public mayorEdad:boolean;
    public trabajos:Array<any>;
    comodin:any = 'cualquier cosa';

    constructor(){
        this.trabajos=['programador',2,'camarero'];
        this.nombre="Andres";
        console.log(this.trabajos);
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.holaMundo(this.nombre);

        // Variables y alcance
        var uno = 1;
        var dos = 2;

        if(uno === 1){
            let uno = 3;
            var dos = 88;
            console.log("dentro del if "+uno);
            console.log("dentro del if "+dos);

        }
        console.log("fuera del if "+uno);
        console.log("fuera del if "+dos);

    }

    holaMundo(nombre){
        
        alert('Hola mundo ' + nombre);
    }

}