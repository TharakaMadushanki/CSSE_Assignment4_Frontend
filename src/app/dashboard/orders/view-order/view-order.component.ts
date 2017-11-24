import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})

export class ViewOrderComponent implements OnInit {

  orders : any = [];
  suppliers : any = [];
  
  constructor(private http: Http) { }

  ngOnInit() {
    this.getOrderData();
    this.getSupplierData();
    this.getOrder();
    this. getSupplier();
    //this.getOrderDataByStatus(val = 'val');
  }

  //getting data from the get request
  getOrderData(){
    return this.http.get('http://localhost:4000/procument/placeOrder')
    .map((res: Response)=>res.json())
  }

  getSupplierData(){
    return this.http.get('http://localhost:4000/procument/supplier')
    .map((res: Response)=>res.json())
  }
  //adding data to order variable (defined sm) which are got from getdata() 
  getOrder(){
     this.getOrderData().subscribe(order=> {
       console.log(order);       
      this.orders = order
    })
  }

  getSupplier(){
    this.getSupplierData().subscribe(supplier=> {
      console.log(supplier);       
      this.suppliers = supplier
    })
  }

  
  getOrderDataByStatus(val:String){
    return this.http.get('http://localhost:4000/procument/placeOrder/status/'+val)
    .map((res: Response)=>res.json()).subscribe(order=> {
      console.log(order);       
      this.orders = order
    })
  }


  public onChangeState(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    console.log(newVal);
    if(newVal == null || newVal == ""){
      this.getOrderData();
      this.getOrder();     
    }
    else
      this.getOrderDataByStatus(newVal);
  }

}
