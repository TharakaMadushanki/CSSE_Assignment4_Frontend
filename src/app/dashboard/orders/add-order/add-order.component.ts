import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {

  sites: any = [];
  suppliers: any = [];
  items: any = [];
  supplierByName: any = [];
  siteByName: any = [];
  AddorderForm: FormGroup;
  site: any;
  supplier: any;
  priority: any;
  item : any;

  constructor(private http: Http) { }

  ngOnInit() {
    this.getAvailableSites();
    this.getSites();
    this.getSupplierData();
    this.getSupplier();
    this.getItemsData();
    this.getItem();

    this.AddorderForm = new FormGroup({
      sitename: new FormControl('', [Validators.required]),
      sitemobile: new FormControl('', [Validators.required]),
      sitelandline: new FormControl('', [Validators.required]),
      siteAddress: new FormControl('', [Validators.required]),
      Suppliername: new FormControl('', [Validators.required]),
      suplandline: new FormControl('', [Validators.required]),
      supmobile: new FormControl('', [Validators.required]),
      supaddress: new FormControl('', [Validators.required]),
      supemail: new FormControl('', [Validators.required]),
      orderId: new FormControl('', [Validators.required]),
      reqdate: new FormControl('', [Validators.required]),
      priority: new FormControl('', [Validators.required]),
      itemname: new FormControl('', [Validators.required]),
      qty: new FormControl('', [Validators.required]),
      itemcode: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      unitprice: new FormControl('', [Validators.required]),
      totalAmount: new FormControl('', [Validators.required]),
    })

  }

  addOrder() {
    var order = {
      OrderID: this.AddorderForm.controls['orderId'].value,
      priority: this.AddorderForm.controls['priority'].value,
      requiredDate: this.AddorderForm.controls['reqdate'].value,
      supplierName: this.AddorderForm.controls['Suppliername'].value,
      Address: this.AddorderForm.controls['supaddress'].value,
      contactNumber: {
        landline: this.AddorderForm.controls['suplandline'].value,
        Mobile: this.AddorderForm.controls['supmobile'].value,
      },
      email: this.AddorderForm.controls['supemail'].value,
      siteName: this.AddorderForm.controls['sitename'].value,
      siteAddress: this.AddorderForm.controls['siteAddress'].value,
      siteContact: {
        landline: this.AddorderForm.controls['sitelandline'].value,
        mobile: this.AddorderForm.controls['sitemobile'].value,
      },
      Items: {
        itemCode: this.AddorderForm.controls['itemcode'].value,
        itemName: this.AddorderForm.controls['itemname'].value,
        category: this.AddorderForm.controls['category'].value,
        unitPrice: this.AddorderForm.controls['unitprice'].value,
        quantity: this.AddorderForm.controls['qty'].value,
      },
      TotalAmount: this.AddorderForm.controls['totalAmount'].value,
    }
    this.http.post('http://localhost:4000/procument/placeOrder', order).subscribe(
      function (response) {
        alert("Order Added Successfully!!!");
      },
      function (error) {
        alert("Error happened" + error);
      },
    );
    this.AddorderForm.reset();


  }






  getAvailableSites() {
    return this.http.get('http://localhost:4000/procument/site')
      .map((res: Response) => res.json())
  }

  getSupplierData() {
    return this.http.get('http://localhost:4000/procument/supplier')
      .map((res: Response) => res.json())
  }

  getSupplierDataByName(supplierName: string) {
    return this.http.get('http://localhost:4000/procument/supplier/name/' + supplierName)
      .map((res: Response) => res.json())
  }

  getSiteDataByName(siteName: string) {
    return this.http.get('http://localhost:4000/procument/site/siteName/' + siteName)
      .map((res: Response) => res.json())
  }

  getItemsData() {
    return this.http.get('http://localhost:4000/procument/item')
      .map((res: Response) => res.json())
  }

  getSites() {
    this.getAvailableSites().subscribe(site => {
      console.log(site);
      this.sites = site
    })
  }

  getSupplier() {
    this.getSupplierData().subscribe(supplier => {
      console.log(supplier);
      this.suppliers = supplier
    })
  }

  getSupplierByName(supplierName) {
    this.getSupplierDataByName(supplierName).subscribe(supplier => {
      console.log(supplier);
      this.supplierByName = supplier
    })
  }




  

  getSiteByName(siteName) {
    this.getSiteDataByName(siteName).subscribe(site => {
      console.log(site);
      this.siteByName = site
    })
  }

  getItem() {
    this.getItemsData().subscribe(item => {
      console.log(item);
      this.items = item
    })
  }


  public onChangeSite(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    this.site = event.target.value;
    console.log(newVal);
    this.getSiteByName(newVal);
  }

  public onChangeSupplier(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    this.supplier = event.target.value;
    console.log(newVal);
    this.getSupplierByName(newVal);
  }

  
 

  onChangePriority(event) {
    this.priority = event.target.value;
  }
  onChangeItem(event) {
    this.item = event.target.value;
  }

}