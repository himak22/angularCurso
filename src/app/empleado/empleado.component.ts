import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector: 'empleado-tag',
    templateUrl: './empleado.component.html'


})
export class EmpleadoComponent {
    public titulo = 'Componente empleados';
    public empleado: Empleado;
    public trabajadores: Array<Empleado>;
    public trabajador_externo: boolean;

    constructor(){
        this.empleado = new Empleado('andres', 29, 'programador', true);
        this.trabajadores = [
            new Empleado('andres', 29, 'programador', true),
            new Empleado('marta', 24, 'ingeniera', true),
            new Empleado('pepe', 29, 'cocinero', false)
        ];
        this.trabajador_externo=false;
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        //console.log(empleado);]
        console.log(this.trabajadores);
    }

    cambiarExterno(valor){
        this.trabajador_externo = valor;
    }
}