import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UppercaseDirective } from "../uppercase.directive";

@NgModule({
    declarations: [
        UppercaseDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        UppercaseDirective
    ],

})
export class SharedModule { }
