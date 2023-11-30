import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PainelpedidoListaComponent } from "./painelpedido-lista/painelpedido-lista.component";

const routes: Routes = [
  {
    path: '',
    component: PainelpedidoListaComponent
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})


export class PainelRouting {}
