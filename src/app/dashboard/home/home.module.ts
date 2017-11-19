import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';

import { HomeComponent } from './home.component';

import { TimelineComponent, ChatComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        AlertModule.forRoot(),
        RouterModule
    ],
    declarations: [
        HomeComponent,
        TimelineComponent,
        ChatComponent,
    ],
    exports: [
        HomeComponent,
        TimelineComponent,
        ChatComponent,
    ]
})

export class HomeModule { }
