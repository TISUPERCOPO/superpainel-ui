import { NgModule } from "@angular/core";
import { PainelpedidoListaComponent } from "./painelpedido-lista/painelpedido-lista.component";
import { PrimengModule } from "src/app/primeng.module";
import { PainelRouting } from "./painel.routing";
import { CommonModule } from "@angular/common";





@NgModule({
declarations: [
  PainelpedidoListaComponent
],
imports:[
  PrimengModule,
  PainelRouting,
  CommonModule
]

})


export class PainelModule {}
