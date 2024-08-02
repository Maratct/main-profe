import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
  /*Definimos como ruta raiz (primera vista visible al iniciar la pagina)
  a InicioComponent
  */
  {
    path:"", component: InicioComponent
  },
  /*
    Las cargas perezosas renderizan un módulo completo unicamente cuando tenemos que acceder a
    ellos, provocando que nuestra pagina sea más rapida porque solo cargara los componentes
    de ESE módulo especifico
  */
  {
    path:"", loadChildren:()=>import("./modules/inicio/inicio.module").then(m=>m.InicioModule)
  },
  {
    path:"", loadChildren:()=>import("./modules/informacion/informacion.module").then(m=>m.InformacionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
