import { Component, OnInit } from '@angular/core';
import { ClienteServicio } from 'src/app/servicio/cliente.servicio';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  proyectos: any[];

  constructor(private clienteServicio: ClienteServicio) { }

  ngOnInit() {
    this.clienteServicio.getClientes().subscribe((res: any[]) => {
      this.proyectos = res;
      console.log(res);
    }, error => {
      console.log(error);
    })
  }

  imagen(nombre: string) {
    return 'https://www.sumatoria.org/assets/images/microempresarios/thumbnails/' + nombre;
  }
}
