import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// App Modules
import { UserModule } from './user/user.module';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';


const MODULES: (typeof UserModule)[] = [
  UserModule,
  SharedModule,
  ComponentsModule
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...MODULES
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
