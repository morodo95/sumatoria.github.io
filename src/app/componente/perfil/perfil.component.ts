import { Component, OnInit } from '@angular/core';
import { AuthServicio } from 'src/app/servicio/auth.servicio';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioServicio } from 'src/app/servicio/usuario.servicio';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: any;

  perfilForm: FormGroup;

  constructor(private authServicio: AuthServicio, private router: Router,
    private usuarioServicio: UsuarioServicio) { }

  ngOnInit() {
    this.obtenerLogueado();
    if (this.usuario == null) {
      this.router.navigate(['/'])
    } else {
      this.inicializarForm();
    }
  }

  inicializarForm() {
    this.perfilForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      fechaCumple: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      pais: new FormControl('', Validators.required),
      motivo: new FormControl('', Validators.required),
      anonimo: new FormControl('', Validators.required),
      ocupacion: new FormControl('', Validators.required)
    });
    this.perfilForm.patchValue({nombre: this.usuario.nombre});
    this.perfilForm.patchValue({apellido: this.usuario.apellido});
    this.perfilForm.patchValue({email: this.usuario.email});
    this.perfilForm.patchValue({fechaCumple: this.usuario.fecha_nacimiento});
    this.perfilForm.patchValue({sexo: this.usuario.sexo});
    this.perfilForm.patchValue({pais: this.usuario.pais_iso});
  }

  obtenerLogueado() {
    this.usuario = this.authServicio.getLogin();
  }

  guardarDatos() {
    let anonimo = 0;
    if (this.perfilForm.get('anonimo').value) {
      anonimo = 1;
    }
    let usuario: any = {
      id_usuario: this.usuario.id_usuario,
      nombre: this.perfilForm.get('nombre').value,
      apellido: this.perfilForm.get('apellido').value,
      email: this.perfilForm.get('email').value,
      telefono: this.perfilForm.get('telefono').value,
      fecha_nacimiento: this.perfilForm.get('fechaCumple').value,
      sexo: this.perfilForm.get('sexo').value,
      pais_iso: this.perfilForm.get('pais').value,
      motivo: this.perfilForm.get('motivo').value,
      anonimo: anonimo,
      ocupacion: this.perfilForm.get('ocupacion').value
    }
    console.log(usuario);
    this.usuarioServicio.guardarDatos('updateprofile', usuario).subscribe(res => {
      console.log(res);
      this.authServicio.login(res);
    }, error => {
      console.log(error);
    })
  }

  logout() {
    this.authServicio.logout();
    this.router.navigate(['/']).then(r => {
      location.reload();
    });
  }

}
