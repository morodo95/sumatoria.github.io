import { Component, OnInit } from '@angular/core';
import { AuthServicio } from 'src/app/servicio/auth.servicio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario: any;

  constructor(private authServicio: AuthServicio, private router: Router) { }

  ngOnInit() {
    this.obtenerLogueado();
  }

  obtenerLogueado() {
    this.usuario = this.authServicio.getLogin();
  }

  logout() {
    this.authServicio.logout();
    this.router.navigate(['/']).then(r => {
      location.reload();
    });
  }

}
