import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from 'src/app/componente/inicio/inicio.component';
import { InversorComponent } from "./componente/inversor/inversor.component";

const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'inversor', component: InversorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }