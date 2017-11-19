import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { ViewOrderDetailsComponent } from './view-order-details/view-order-details.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ AddOrderComponent , OrdersComponent, ViewOrderComponent, ViewOrderDetailsComponent ]
})
export class OrdersManagerModule { }
