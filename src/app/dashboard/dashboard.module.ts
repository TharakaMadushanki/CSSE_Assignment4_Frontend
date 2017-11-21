import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarModule } from '../shared/sidebar/sidebar.module';
import { TopnavModule } from '../shared/topnav/topnav.module';
import { HomeModule } from './home/home.module';
import { ReportsModule } from './reports/reports.module';
import { TablesModule } from './tables/tables.module';
import { FormsModule } from './forms/forms.module';
import { BsElementsModule } from './bs-elements/bs-elements.module';
import { DashboardComponent } from './dashboard.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { AddUserComponent } from './user-manager/add-user/add-user.component';
import { UserManagerModule } from './user-manager/user-manager.module';
import { OrdersManagerModule } from './orders/orders.module';
import { OrdersComponent } from './orders/orders.component';
import { AddOrderComponent } from './orders/add-order/add-order.component';
import { ViewOrderComponent } from './orders/view-order/view-order.component';

import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';
import { ViewSupplierComponent } from './supplier/view-supplier/view-supplier.component';

import { InvoiceComponent } from './invoice/invoice.component';
import { CreateInvoiceComponent } from './invoice/create-invoice/create-invoice.component';
import { ViewInvoiceComponent } from './invoice/view-invoice/view-invoice.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SidebarModule,
    TopnavModule,
    HomeModule,
    ReportsModule,
    TablesModule,
    FormsModule,
    BsElementsModule,
    UserManagerModule,
    OrdersManagerModule
  ],
  declarations: [
    DashboardComponent,
    AddSupplierComponent,
    ViewSupplierComponent,
    InvoiceComponent,
    CreateInvoiceComponent,
    ViewInvoiceComponent
  ]
})
export class DashboardModule { }
