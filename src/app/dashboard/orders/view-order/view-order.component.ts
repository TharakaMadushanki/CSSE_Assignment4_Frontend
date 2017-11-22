import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})

export class ViewOrderComponent implements OnInit {

  suppliers : any = [];
  
  constructor(private http: Http) { }

  ngOnInit() {
    this.getData();
    this.getSupplier();
  }

  //getting data from the get request
  getData(){
    return this.http.get('http://localhost:4000/procument/supplier')
    .map((res: Response)=>res.json())
  }

    //adding data to supplier variable (defined upper) which are got from getdata() 
    getSupplier(){
      this.getData().subscribe(supplier=> {
        console.log(supplier);       
        this.suppliers = supplier
      })
    }


}
