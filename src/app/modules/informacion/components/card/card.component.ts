import { Component } from '@angular/core';
import { Card } from 'src/app/models/card'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
// comentario
public info: Card[];

constructor(){
  this.info = [
    {
      idCard: "1",
      titulo: "Mandarina",
      descripcion: "Son naranjas y de otoño",
      imagen: "https://www.jujuydice.com.ar/public/images/noticias/46318-ahora-el-gobierno-les-corta-la-asignacion-universal-a-bolivianos-con-residencia-permanente-en-el-pais.jpg",
      alt: "tu fruta",
    },
  ]
}
}
