import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-view-special-items-orders',
  templateUrl: './view-special-items-orders.component.html',
  styleUrls: ['./view-special-items-orders.component.scss']
})
export class ViewSpecialItemsOrdersComponent implements OnInit {

  suppliers: any = [];
  orders: any = [];
  type: String;

  constructor(private http: Http) { }

  ngOnInit() {
    this.getSupplier();
    this.getOrder();
  }

  getSupplier() {
    this.http.get('http://localhost:4000/procument/supplier')
      .map((res: Response) => res.json()).subscribe(supplier => {
        console.log(supplier);
        this.suppliers = supplier
      })
  }

  getOrder() {
    this.type = "Special";
    this.http.get('http://localhost:4000/procument/placeOrder/orderType/' + this.type)
      .map((res: Response) => res.json()).subscribe(order => {
        console.log(this.type)
        console.log(order);
        this.orders = order
      })
  }

  public onChangeStatus(event): void {
    const status = event.target.value;
    console.log(status);
    if (status == null || status == "") {
      this.getOrder();
    }
    else
      this.getSpecialOrderDataByStatus(status);
  }

  getSpecialOrderDataByStatus(status: String) {
    this.type = "Special";
    return this.http.get('http://localhost:4000/procument/placeOrder/' + this.type + '/status/' + status)
      .map((res: Response) => res.json()).subscribe(order => {
        console.log(order);
        this.orders = order
      })
  }

  public onChangeSupplier(event): void {
    const supplier = event.target.value;
    console.log(supplier);
    if (supplier == null || supplier == "") {
      this.getOrder();
    }
    else
      this.getSpecialOrderDataBySupplier(supplier);
  }

  getSpecialOrderDataBySupplier(supplier: String) {
    this.type = "Special";
    return this.http.get('http://localhost:4000/procument/placeOrder/' + this.type + '/supplier/' + supplier)
      .map((res: Response) => res.json()).subscribe(order => {
        console.log(order);
        this.orders = order
      })
  }

  getSpecialOrderDataByOrderId(orderID: String) {
    this.type = "Special";
    return this.http.get('http://localhost:4000/procument/placeOrder/' + this.type + '/id/' + orderID)
      .map((res: Response) => res.json()).subscribe(order => {
        console.log(order);
        this.orders = order
      })
  }

  public onClickSearchByOrderId(orderID): void {
    const id = orderID;
    console.log(id);
    if (id == null || id == "") {
      this.getOrder();
    }
    else
      this.getSpecialOrderDataByOrderId(id);
  }

  public focusOutOrderIdInput(id): void {
    const val = id;
    console.log(val);
    if (val == null || val == "") {
      this.getOrder();
    }

  }

  public onClickSearchByDate(date): void {
    const val = date;
    console.log(val);
    if (val == null || val == "") {
      this.getOrder();
    }
    else
      this.getOrderDataByDate(val);
  }

  getOrderDataByDate(date: Date) {
    this.type = "Special";
    return this.http.get('http://localhost:4000/procument/placeOrder/' + this.type + '/date/' + date)
      .map((res: Response) => res.json()).subscribe(order => {
        console.log(order);
        this.orders = order
      })
  }

  public focusOutDateInput(val): void {
    const value = val;
    console.log(value);
    if (value == null || value == "") {
      this.getOrder();
    }

  }

}
