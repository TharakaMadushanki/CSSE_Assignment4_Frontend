import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSupplierComponent } from './view-supplier.component';
import { FormBuilder,Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {FormControl,FormGroup} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,   
    FormBuilder,
    FormGroup
    
  ],
  declarations: [
    ViewSupplierComponent
  ]
})
export class ViewSupplierModule { }
