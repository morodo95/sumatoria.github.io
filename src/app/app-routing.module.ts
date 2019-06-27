import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from 'src/app/componente/inicio/inicio.component';
import { InversorComponent } from "./componente/inversor/inversor.component";
import { ComoLoHacemosComponent } from "./componente/como-lo-hacemos/como-lo-hacemos.component";
import { EquipoComponent } from "./componente/equipo/equipo.component";
import { MisInversionesComponent } from "./componente/mis-inversiones/mis-inversiones.component";
import { PagadoComponent } from "./componente/pagado/pagado.component";
import { PasoAPasoComponent } from "./componente/paso-a-paso/paso-a-paso.component";
import { PerfilComponent } from "./componente/perfil/perfil.component";
import { ProyectosComponent } from "./componente/proyectos/proyectos.component";

const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'proyecto/:id', component: InversorComponent },
    { path: 'como-lo-hacemos', component: ComoLoHacemosComponent },
    { path: 'equipo', component: EquipoComponent },
    { path: 'mis-inversiones', component: MisInversionesComponent },
    { path: 'pagado', component: PagadoComponent },
    { path: 'paso-a-paso', component: PasoAPasoComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'proyectos', component: ProyectosComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }