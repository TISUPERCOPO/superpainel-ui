import { NgModule } from "@angular/core";
import { PrimengModule } from "../primeng.module";
import { RouterModule } from "@angular/router";
import { PainelModule } from "../pages/painel/painel.module";
import { PainelService } from "../pages/painel/painel.service";
import { NavbarComponent } from './layout/navbar/navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';




@NgModule({
  declarations: [
    NavbarComponent,
    LayoutComponent
  ],
  imports:[
    PrimengModule,
    RouterModule
  ],
  providers: [
    PainelService

  ],
  exports:[
    LayoutComponent
  ]


})


export class CoreModule {}
