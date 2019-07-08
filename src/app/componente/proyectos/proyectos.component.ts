import { Component, OnInit } from '@angular/core';
import { MicroemprendimientoServicio } from 'src/app/servicio/microemprendimiento.servicio';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: any[] = [];

  constructor(private microemprendimientoServicio: MicroemprendimientoServicio) { }

  ngOnInit() {
    this.obtenerMicroemprendimientos();
  }

  imagen(nombre: string) {
    return 'https://www.sumatoria.org/assets/images/microempresarios/thumbnails/' + nombre;
  }

  obtenerMicroemprendimientos() {
    let dataEmprendimiento: any = {id_micro: ''};
    this.microemprendimientoServicio.getMicroemprendimiento('microemprendedores', dataEmprendimiento).subscribe(res =>{
      console.log(res)
      this.proyectos = res['emprendimientosData'];
      this.proyectos.forEach(proyecto => {
        proyecto.descripcion = proyecto.descripcion.substring(0, 230) + '...';
      });
    }, error =>{
      console.log(error)	
    })
  }

}
