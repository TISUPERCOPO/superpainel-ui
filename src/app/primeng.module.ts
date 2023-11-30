import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { SplitButtonModule } from 'primeng/splitbutton';
import { FormsModule } from "@angular/forms";
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CommonModule } from "@angular/common";





@NgModule({
  exports:[
    CommonModule,
    ButtonModule,
    CardModule,
    TooltipModule,
    TableModule,
    SplitButtonModule,
    FormsModule,
    OverlayPanelModule
  ]


})



export class PrimengModule {}
