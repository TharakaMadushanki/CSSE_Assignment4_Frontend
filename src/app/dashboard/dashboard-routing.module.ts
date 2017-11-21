import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './reports/reports.component';
import { TablesComponent } from './tables/tables.component';
import { FormsComponent } from './forms/forms.component';
import { BsElementsComponent } from './bs-elements/bs-elements.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { AddUserComponent } from './user-manager/add-user/add-user.component';
import {ViewUsersComponent} from './user-manager/view-users/view-users.component';
import { AddOrderComponent } from './orders/add-order/add-order.component';
import { ViewOrderComponent } from './orders/view-order/view-order.component';
import { ViewOrderDetailsComponent } from './orders/view-order-details/view-order-details.component';
import { ViewSpecialItemsOrdersComponent } from './orders/view-special-items-orders/view-special-items-orders.component';
import { ViewHigherBillOrdersComponent } from './orders/view-higher-bill-orders/view-higher-bill-orders.component';
import { MakeAnInquiryComponent } from './orders/make-an-inquiry/make-an-inquiry.component';

import {AddSupplierComponent} from './supplier/add-supplier/add-supplier.component';
import {ViewSupplierComponent} from './supplier/view-supplier/view-supplier.component';

import {CreateInvoiceComponent} from './invoice/create-invoice/create-invoice.component';
import {ViewInvoiceComponent} from './invoice/view-invoice/view-invoice.component';

// import { ViewUsersComponent  } from './users-manager/view-users/view-users.component';

const dashboardRoutes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'reports', component: ReportComponent },
            { path: 'tables', component: TablesComponent },
            { path: 'forms', component: FormsComponent },
            { path: 'element', component: BsElementsComponent },
            {
             path: 'users',
              children: [
                 {path: 'Add_User', component:  AddUserComponent },
                 {path: 'view_User', component:  ViewUsersComponent }
            ]
            },
            {
             path : 'order',
               children : [
                   {path : 'Add_Order', component: AddOrderComponent},
                   {path : 'View_Order', component: ViewOrderComponent},
                   {path : 'View_Order_Details', component: ViewOrderDetailsComponent},
                   {path : 'View-Special-Items-Orders', component: ViewSpecialItemsOrdersComponent},
                   {path : 'View-Higher-Bill-Orders', component: ViewHigherBillOrdersComponent},
                   {path : 'Make-An-Inquiry', component: MakeAnInquiryComponent}
                   
               ]
            },
            {
                path : 'supplier',
                  children : [
                      {path : 'Add_Supplier', component: AddSupplierComponent},
                      {path : 'View_Supplier', component: ViewSupplierComponent}
                      
                ]
            },
            {
                path : 'invoice',
                  children : [
                       {path : 'Create_Invoice', component: CreateInvoiceComponent},
                       {path : 'View_Invoice', component: ViewInvoiceComponent}
                      
                ]
            },

        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
        RouterModule
    ]

})
export class DashboardRoutingModule {}
