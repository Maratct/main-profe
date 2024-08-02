import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionRoutingModule } from './informacion-routing.module';

//VISTA
import { InformacionComponent } from './page/informacion/informacion.component';

//COMPONENTE
import { CardComponent } from './components/card/card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    InformacionComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    InformacionRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    InformacionComponent,
    CardComponent
  ],
})
export class InformacionModule { }
