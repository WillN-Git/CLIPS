import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Components
import { NavComponent } from './nav/nav.component';

@NgModule({
    declarations: [
        NavComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        NavComponent
    ]
})

export class ComponentsModule { }