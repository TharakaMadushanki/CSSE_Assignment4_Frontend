import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {

  sites : any = [];
  suppliers : any = [];
  items :any = [];
  supplierByName : any = [];
  siteByName : any = [];

  constructor(private http: Http ) { }

  ngOnInit() {
    this.getAvailableSites();
    this.getSites();
    this.getSupplierData();
    this. getSupplier();
    this.getItemsData();
    this.getItem();
  }

  getAvailableSites(){
    return this.http.get('http://localhost:4000/procument/site')
    .map((res: Response)=>res.json())
  }

  getSupplierData(){
    return this.http.get('http://localhost:4000/procument/supplier')
    .map((res: Response)=>res.json())
  }

  getSupplierDataByName(supplierName :string){
    return this.http.get('http://localhost:4000/procument/supplier/name/'+supplierName)
    .map((res: Response)=>res.json())
  }  

  getSiteDataByName(siteName :string){
    return this.http.get('http://localhost:4000/procument/site/siteName/'+siteName)
    .map((res: Response)=>res.json())
  } 

  getItemsData(){
    return this.http.get('http://localhost:4000/procument/item')
    .map((res: Response)=>res.json())
  }

  getSites(){
    this.getAvailableSites().subscribe(site=> {
      console.log(site);       
      this.sites = site
    })
  }

  getSupplier(){
    this.getSupplierData().subscribe(supplier=> {
      console.log(supplier);       
      this.suppliers = supplier
    })
  }

  getSupplierByName(supplierName){
    this.getSupplierDataByName(supplierName).subscribe(supplier=> {
      console.log(supplier);       
      this.supplierByName = supplier
    })
  }

  getSiteByName(siteName){
    this.getSiteDataByName(siteName).subscribe(site=> {
      console.log(site);       
      this.siteByName = site
    })
  }

  getItem(){
    this.getItemsData().subscribe(item=> {
      console.log(item);       
      this.items = item
    })
  }


  public onChangeSite(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    console.log(newVal);
      this.getSiteByName(newVal);
  }

  public onChangeSupplier(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    console.log(newVal);
      this.getSupplierByName(newVal);
  }
 
}