import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { PrimengModule } from './primeng.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { CommonModule } from '@angular/common';
import { LoginModule } from './pages/login/login.module';
import { MessageService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { UppercaseDirective } from './uppercase.directive';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimengModule,
    NgxSpinnerModule,
    CommonModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    LoginModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
