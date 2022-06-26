import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { AuthModalComponent } from './auth-modal/auth-modal.component';

// Modules
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AuthModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AuthModalComponent,
  ]
})
export class UserModule { }
