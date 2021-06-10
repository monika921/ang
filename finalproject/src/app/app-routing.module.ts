import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPassComponent } from './auth/reset-pass/reset-pass.component';
import { SetPassComponent } from './auth/set-pass/set-pass.component';
import { FactorsComponent } from './factors/factors.component';
import { ImportantComponent } from './important/important.component';
import { VaccineComponent } from './vaccine/vaccine.component';

const routes: Routes = [
  {path: 'important', component: ImportantComponent},
  {path: 'factor', component: FactorsComponent},
  {path: 'vaccine', component: VaccineComponent},
  {path: 'reset-pass', component: ResetPassComponent},
  {path: 'set-pass', component: SetPassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
