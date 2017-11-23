import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserManagerComponent } from './dashboard/user-manager/user-manager.component';
import { AddUserComponent } from './dashboard/user-manager/add-user/add-user.component';
// import { ViewUsersComponent } from './dashboard/user-manager/view-users/view-users.component';

// import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login', pathMatch: 'full' },
    { path: 'signup', redirectTo: '/signup', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        LoginModule,
        SignupModule,
        DashboardModule,
        RouterModule,
    ]
})
export class AppRoutingModule { }
