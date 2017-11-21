import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { ViewOrderDetailsComponent } from './view-order-details/view-order-details.component';
import { ViewSpecialItemsOrdersComponent } from './view-special-items-orders/view-special-items-orders.component';
import { ViewHigherBillOrdersComponent } from './view-higher-bill-orders/view-higher-bill-orders.component';
import { MakeAnInquiryComponent } from './make-an-inquiry/make-an-inquiry.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ AddOrderComponent , OrdersComponent, ViewOrderComponent, ViewOrderDetailsComponent, ViewSpecialItemsOrdersComponent, ViewHigherBillOrdersComponent, MakeAnInquiryComponent ]
})
export class OrdersManagerModule { }
