import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class UsuarioServicio {

    private server: string = 'http://quinto.site/apiangular2/';

    constructor(private http: HttpClient) { }

    public guardarDatos(type, usuario) {
        return this.http.post(this.server + type, JSON.stringify(usuario)).pipe(map((res) =>  res));
    }

}