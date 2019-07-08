import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthServicio {

    constructor() { }

    login(usuario) {
        localStorage.setItem('usuario', JSON.stringify(usuario));
    }

    logout() {
        localStorage.clear();
    }

    getLogin() {
        return JSON.parse(localStorage.getItem('usuario'));
    }

}