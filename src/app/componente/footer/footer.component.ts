import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PrincipalServicio } from 'src/app/servicio/principal.servicio';
import { AuthServicio } from 'src/app/servicio/auth.servicio';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  path: string;

  loginForm: FormGroup;
  registroForm: FormGroup;

  usuario: any;

  registrado: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private principalServicio: PrincipalServicio,
    private authServicio: AuthServicio, private router: Router) { 
    this.activatedRoute.url.subscribe(activeUrl =>{
      this.path = window.location.pathname;
    });
  }

  ngOnInit() {
    this.inicializarLogin();
    this.inicializarRegistro();
    this.obtenerLogueado();
  }

  obtenerLogueado() {
    this.usuario = this.authServicio.getLogin();
  }

  inicializarLogin() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      clave: new FormControl('', Validators.required)
    });
  }

  inicializarRegistro() {
    this.registroForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      clave: new FormControl('', Validators.required)
    });
  }

  login() {
    let login: any = {
      email: this.loginForm.get('email').value,
      clave: this.loginForm.get('clave').value
    };
    this.principalServicio.login('login', login).subscribe(res => {
      this.authServicio.login(res['userData']);
      this.router.navigate(['/']).then(r => {
        location.reload();
      });
    }, error => {
      console.log(error);
    })
  }

  registrar() {
    let usuario: any = {
      nombre: this.registroForm.get('nombre').value,
      apellido: this.registroForm.get('apellido').value,
      email: this.registroForm.get('email').value,
      clave: this.registroForm.get('clave').value
    };
    this.principalServicio.registro('signup', usuario).subscribe(res => {
      this.registrado = true;
      this.router.navigate(['/']).then(r => {
        location.reload();
      });
    }, error => {
      console.log(error);
    })
  }

}
