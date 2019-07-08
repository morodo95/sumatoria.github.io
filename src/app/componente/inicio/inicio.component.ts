import { Component, OnInit } from '@angular/core';
import { MicroemprendimientoServicio } from 'src/app/servicio/microemprendimiento.servicio';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

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
      let i = 0;
      res['emprendimientosData'].forEach(proyecto => {
        if (i < 3) {
          this.proyectos.push(proyecto);
        }
        i++;
      });
      this.proyectos.forEach(proyecto => {
        proyecto.descripcion = proyecto.descripcion.substring(0, 230) + '...';
      });
    }, error =>{
      console.log(error)	
    })
  }

}
