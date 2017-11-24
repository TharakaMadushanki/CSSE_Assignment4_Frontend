import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-view-order-details',
  templateUrl: './view-order-details.component.html',
  styleUrls: ['./view-order-details.component.scss']
})
export class ViewOrderDetailsComponent implements OnInit {
  orders : any = [];
  orderID : string;

  constructor(private activatedRoute: ActivatedRoute, private http: Http) { }

  ngOnInit() {

    this.getOrderDataByObjectId();
  }

   //getting data from the get request
   getOrderDataByObjectId(){
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.orderID = params['orderId'];
      console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD"+this.orderID);

      return this.http.get('http://localhost:4000/procument/placeOrder/Oid/'+this.orderID)
      .map((res: Response)=>res.json()).subscribe(order=> {
        console.log(order);       
       this.orders = order
     })
    }); 
  }
  

  // public editOrder(item): void {  // event will give you full breif of action
  //   const newVal = item.quantity;
  //   console.log(newVal);
  //     this.editOrderDetails(newVal);
  // }
}
