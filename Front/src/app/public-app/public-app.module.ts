import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicAppRoutingModule } from './public-app-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    PublicAppRoutingModule
  ]
})
export class PublicAppModule { }
