import { formatCurrency } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmiCalcComponent } from './emi-calc/emi-calc.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path:'form',
    component:FormComponent
  },
  {
    path:'emicalc',
    component:EmiCalcComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
