import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { SignupRoutingModule } from './signup-routing.module';

import { ViewSupplierComponent } from './view-supplier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    //SignupRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ViewSupplierComponent
  ]
})
export class ViewSupplierModule { }