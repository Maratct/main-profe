import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Componentes LOCALES
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

//Importamos para ACCEDER a todas las rutas de la pagina
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  //Componentes LOCALES del modulo -> creados por nosotros
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  //Archivos, compoentes de la web o de otro modulo de los que queremos tener acceso
  /*Archivos de rutas (para el navegador), componentes de material que vienen desde internet,
  componentes que vienen de otro modulo (por ejemplo, una card)*/
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  // EXPONE los componentes locales para que puedan ser mostrados en el resto de la pagina
  // EXPONE componentes de la web para poder tener acceso a ellos en el
  exports:[
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
