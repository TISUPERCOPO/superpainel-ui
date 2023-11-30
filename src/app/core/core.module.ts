import { NgModule } from "@angular/core";
import { PrimengModule } from "../primeng.module";
import { RouterModule } from "@angular/router";
import { PainelModule } from "../pages/painel/painel.module";
import { PainelService } from "../pages/painel/painel.service";




@NgModule({
  declarations: [],
  imports:[
    PrimengModule,
    RouterModule
  ],
  providers: [
    PainelService

  ],
  exports:[
  ]


})


export class CoreModule {}
