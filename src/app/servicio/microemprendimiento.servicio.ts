import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class MicroemprendimientoServicio {

    private server: string = 'http://quinto.site/apiangular2/';

    constructor(private http: HttpClient) { }

    public getMicroemprendimientos(type, credentials) {
        return this.http.post(this.server + type, JSON.stringify(credentials)).pipe(map((res) =>  res));
    }

    public getMicroemprendimiento(type, credentials) {
        return this.http.post(this.server + type, JSON.stringify(credentials)).pipe(map((res) =>  res));
    }

}