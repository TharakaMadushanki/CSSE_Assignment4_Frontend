import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {AddUserComponent} from './add-user/add-user.component';
import { UserManagerComponent } from './user-manager.component';
import { ViewUsersComponent } from './view-users/view-users.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ AddUserComponent , UserManagerComponent, ViewUsersComponent ]
})
export class UserManagerModule { }
