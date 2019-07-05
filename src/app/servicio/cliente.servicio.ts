import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class ClienteServicio {

    private server: string = 'http://quinto.site/apiangular2/';

    constructor(private http: HttpClient) { }

    public getClientes() {
        return this.http.get(this.server + 'listado.php').pipe(map(res => res));
    }

}