import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { SetPassComponent } from './set-pass/set-pass.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPassComponent,
    SetPassComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ResetPassComponent
  ]
})
export class AuthModule { }
