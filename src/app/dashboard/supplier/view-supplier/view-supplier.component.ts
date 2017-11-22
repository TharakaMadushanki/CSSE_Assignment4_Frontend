import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http'
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-view-supplier',
  templateUrl: './view-supplier.component.html',
  styleUrls: ['./view-supplier.component.scss']
})
export class ViewSupplierComponent implements OnInit {

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
