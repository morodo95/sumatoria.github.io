import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componente/footer/footer.component';
import { HeaderComponent } from './componente/header/header.component';
import { InversorComponent } from './componente/inversor/inversor.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { ModalModule } from 'ngb-modal';
import { ComoLoHacemosComponent } from './componente/como-lo-hacemos/como-lo-hacemos.component';
import { EquipoComponent } from './componente/equipo/equipo.component';
import { MisInversionesComponent } from './componente/mis-inversiones/mis-inversiones.component';
import { PagadoComponent } from './componente/pagado/pagado.component';
import { PasoAPasoComponent } from './componente/paso-a-paso/paso-a-paso.component';
import { PerfilComponent } from './componente/perfil/perfil.component';
import { ProyectosComponent } from './componente/proyectos/proyectos.component';
import { InlineHrefDirective } from 'ng-inline-href';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    InversorComponent,
    InicioComponent,
    ComoLoHacemosComponent,
    EquipoComponent,
    MisInversionesComponent,
    PagadoComponent,
    PasoAPasoComponent,
    PerfilComponent,
    ProyectosComponent,
    InlineHrefDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ModalModule
  ],
  exports: [
    InlineHrefDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
