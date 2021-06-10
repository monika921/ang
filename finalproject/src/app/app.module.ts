import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImportantComponent } from './important/important.component';
import { AccordionModule } from './accordion/accordion.module';
import { FactorsComponent } from './factors/factors.component';
import { InfectComponent } from './infect/infect.component';
import { AuthModule } from './auth/auth.module';
import { VaccineComponent } from './vaccine/vaccine.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImportantComponent,
    FactorsComponent,
    InfectComponent,
    VaccineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
