import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GokuOuVegetaComponent } from './components/goku-ou-vegeta/goku-ou-vegeta.component';
import { GatoOuCachorroComponent } from './components/gato-ou-cachorro/gato-ou-cachorro.component';
import { AkameOuEsdeathComponent } from './components/akame-ou-esdeath/akame-ou-esdeath.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'gatoCachorro',
    component:GatoOuCachorroComponent
  },
  {
    path:'gokuVegeta',
    component:GokuOuVegetaComponent
  },
  {
    path:'akameEsdeath',
    component:AkameOuEsdeathComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
