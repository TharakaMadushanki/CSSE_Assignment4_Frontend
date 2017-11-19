import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { ReportComponent } from './reports.component';

import 'chart.js/dist/Chart.js';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule
  ],
  declarations: [
    ReportComponent
  ]
})
export class ReportsModule { }
