import { NgModule } from "@angular/core";
import { PrimengModule } from "../primeng.module";
import { RouterModule } from "@angular/router";
import { PainelModule } from "../pages/painel/painel.module";
import { PainelService } from "../pages/painel/painel.service";
import { NavbarComponent } from './layout/navbar/navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthService } from "../pages/login/auth.service";
import { MessageService } from "primeng/api";
import { SharedModule } from "../shared/shared.module";




@NgModule({
  declarations: [
    NavbarComponent,
    LayoutComponent
  ],
  imports:[
    PrimengModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    PainelService,
    AuthService,
    MessageService

  ],
  exports:[
    LayoutComponent,
  ]


})


export class CoreModule {}
