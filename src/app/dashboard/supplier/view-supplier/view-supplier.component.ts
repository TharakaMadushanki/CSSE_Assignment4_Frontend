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

  suppliers: any = [];

  constructor(private http: Http) { }
  //this function is automatically called when the specific page is loaded
  ngOnInit() {
    //calling the two functions to extract data
    this.getSuppliersData();
    this.getSuppliers();
  }

  //getting Supplier data from the GET request
  getSuppliersData() {
    return this.http.get('http://localhost:4000/procument/supplier')
      .map((res: Response) => res.json())
  }

  //adding data to suppliers variable (defined above)
  getSuppliers() {
    this.getSuppliersData().subscribe(supplier => {
      console.log(supplier);
      this.suppliers = supplier
    })
  }



}
