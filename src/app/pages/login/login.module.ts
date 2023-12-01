import { PrimengModule } from 'src/app/primeng.module';
import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login/login.routing';





@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    PrimengModule,
    LoginRoutingModule
  ]

})


export class LoginModule {}
