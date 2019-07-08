import { Component, OnInit } from '@angular/core';
import { AuthServicio } from 'src/app/servicio/auth.servicio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-inversiones',
  templateUrl: './mis-inversiones.component.html',
  styleUrls: ['./mis-inversiones.component.css']
})
export class MisInversionesComponent implements OnInit {

  usuario: any;

  constructor(private authServicio: AuthServicio, private router: Router) { }

  ngOnInit() {
    this.obtenerLogueado();
    if (this.usuario == null) {
      this.router.navigate(['/'])
    }
  }

  logout() {
    this.authServicio.logout();
    this.router.navigate(['/']).then(r => {
      location.reload();
    });
  }

  obtenerLogueado() {
    this.usuario = this.authServicio.getLogin();
  }

}
