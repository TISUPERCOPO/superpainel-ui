import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { SplitButtonModule } from 'primeng/splitbutton';
import { FormsModule } from "@angular/forms";
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CommonModule } from "@angular/common";
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SidebarModule } from 'primeng/sidebar';
import { AccordionModule } from 'primeng/accordion';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  exports:[
    CommonModule,
    ButtonModule,
    CardModule,
    TooltipModule,
    TableModule,
    SplitButtonModule,
    FormsModule,
    OverlayPanelModule,
    AvatarModule,
    AvatarGroupModule,
    SidebarModule,
    AccordionModule,
    PasswordModule,
    InputTextModule
  ]


})



export class PrimengModule {}
