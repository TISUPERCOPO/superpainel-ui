import { PrimengModule } from 'src/app/primeng.module';
import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login.routing';
import { SharedModule } from 'src/app/shared/shared.module';





@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    PrimengModule,
    LoginRoutingModule,
  ],
  exports:[

  ]

})


export class LoginModule {}
