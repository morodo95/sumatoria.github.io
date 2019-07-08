import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class PrincipalServicio {

    private server: string = 'http://quinto.site/apiangular2/';

    constructor(private http: HttpClient) { }

    public login(type, login) {
        return this.http.post(this.server + type, JSON.stringify(login)).pipe(map((res) =>  res));
    }

    public registro(type, usuario) {
        return this.http.post(this.server + type, JSON.stringify(usuario)).pipe(map((res) =>  res));
    }

}