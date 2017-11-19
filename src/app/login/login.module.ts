import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { LoginComponent } from './login.component';
import {UserService} from '../shared/services/user.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
