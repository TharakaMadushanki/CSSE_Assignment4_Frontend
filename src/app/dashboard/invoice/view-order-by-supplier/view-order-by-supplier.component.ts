import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-order-by-supplier',
  templateUrl: './view-order-by-supplier.component.html',
  styleUrls: ['./view-order-by-supplier.component.scss']
})
export class ViewOrderBySupplierComponent implements OnInit {
  router: any;
  
    orders : any = [];
    suppliers : any = [];
   
    constructor(private http: Http , router: Router) { }
  
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
  
    getOrderDataBySuppplier(val:String){
      return this.http.get('http://localhost:4000/procument/placeOrder/supplier/'+val)
      .map((res: Response)=>res.json()).subscribe(order=> {
        console.log(order);       
        this.orders = order
      })
    }
  
    getOrderDataByOrderId(orderID:String){
      return this.http.get('http://localhost:4000/procument/placeOrder/id/'+orderID)
      .map((res: Response)=>res.json()).subscribe(order=> {
        console.log(order);       
        this.orders = order
      })
    }
  
    getOrderDataByDate(date:Date){
      return this.http.get('http://localhost:4000/procument/placeOrder/date/'+date)
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
  
    public onChangeSupplier(event): void {  // event will give you full breif of action
      const newVal = event.target.value;
      console.log(newVal);
      if(newVal == null || newVal == ""){
        this.getOrderData();
        this.getOrder();   
      }
      else
        this.getOrderDataBySuppplier(newVal);
    }
  
    public onClickSearchByOrderId(orderID): void {  // event will give you full breif of action
      const newVal = orderID;
      console.log("ordrid"+ newVal);
      if(newVal == null || newVal == ""){
        this.getOrderData();
        this.getOrder();   
      }
      else
        this.getOrderDataByOrderId(newVal);
    }
  
    public  focusOutOrderIdInput(oldVal): void {  // event will give you full breif of action
      const newVal = oldVal;
      console.log("ordrid"+ newVal);
      if(newVal == null || newVal == ""){
        this.getOrderData();
        this.getOrder();   
      }
     
    }
  
    public onClickSearchByDate(date): void {  // event will give you full breif of action
      const newVal = date;
      console.log("date"+ newVal);
      if(newVal == null || newVal == ""){
        this.getOrderData();
        this.getOrder();   
      }
      else
        this.getOrderDataByDate(newVal);
    }
  
    public  focusOutDateInput(oldVal): void {  // event will give you full breif of action
      const newVal = oldVal;
      console.log("ordrid"+ newVal);
      if(newVal == null || newVal == ""){
        this.getOrderData();
        this.getOrder();   
      }
     
    } 
}
