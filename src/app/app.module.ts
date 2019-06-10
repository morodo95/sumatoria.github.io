import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componente/footer/footer.component';
import { HeaderComponent } from './componente/header/header.component';
import { InversorComponent } from './componente/inversor/inversor.component';
import { InicioComponent } from './componente/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    InversorComponent,
    InicioComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
