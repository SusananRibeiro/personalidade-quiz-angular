import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GatoOuCachorroComponent } from './components/gato-ou-cachorro/gato-ou-cachorro.component';
import { GokuOuVegetaComponent } from './components/goku-ou-vegeta/goku-ou-vegeta.component';
import { AkameOuEsdeathComponent } from './components/akame-ou-esdeath/akame-ou-esdeath.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GatoOuCachorroComponent,
    GokuOuVegetaComponent,
    AkameOuEsdeathComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
