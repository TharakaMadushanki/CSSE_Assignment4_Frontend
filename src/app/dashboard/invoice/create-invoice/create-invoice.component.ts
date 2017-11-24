import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss']
})
export class CreateInvoiceComponent implements OnInit {

  invoiceForm: FormGroup;
  invoiceadditemForm: FormGroup;
  itemlist: any = {};
  orders: any = {};
  order: any = [];
  siteName : String;
  Isempty : boolean = false;
  orderID : any;


  constructor(private http: Http) { }

  ngOnInit() {

    this.getCompany();

    this.invoiceForm = new FormGroup({
      InvoiceDate: new FormControl('', [Validators.required]),
      orderid: new FormControl('', [Validators.required]),
      Site: new FormControl('', [Validators.required]),
      item: new FormControl('',[Validators.required]),
      qty: new FormControl('',[Validators.required]),
      UnitPrice: new FormControl('',[Validators.required]),
      Amount: new FormControl('',[Validators.required]),

    });

  }
  callType(val){
    this.orderID = val;
  }

  AddInvoice() {
    var invoice = {
      Site : this.invoiceForm.controls['Site'].value,
      date : this.invoiceForm.controls['InvoiceDate'].value,
      order : this.orderID,
      Item : this.invoiceForm.controls['item'].value,
      qty : this.invoiceForm.controls['qty'].value,
      unitPrice : this.invoiceForm.controls['UnitPrice'].value,
      Amount : this.invoiceForm.controls['Amount'].value,
    }
    console.log(this.invoiceForm.controls['Site'].value+ " "+this.invoiceForm.controls['InvoiceDate'].value + " " + this.invoiceForm.controls['orderid'].value + " " + this.invoiceForm.controls['item'].value + " " + this.invoiceForm.controls['qty'].value + " " +this.invoiceForm.controls['UnitPrice'].value + " " + this.invoiceForm.controls['Amount'].value);
    
    
    if(this.invoiceForm.controls['Site'].value == "" || this.invoiceForm.controls['InvoiceDate'].value == "" || this.invoiceForm.controls['orderid'].value == "" || this.invoiceForm.controls['item'].value == "" || this.invoiceForm.controls['qty'].value == "" || this.invoiceForm.controls['UnitPrice'].value == "" || this.invoiceForm.controls['Amount'].value == "")
    {
      alert("fill the all the field and try again!!!")
    }
    else{
    console.log(invoice);
    this.http.post('http://localhost:4000/procument/invoice', invoice).subscribe(
      function(response) { 
        alert("Invoice Added Successfully!!!");
      },
      function(error) {
        alert("Error happened" + error);
      },
    ); 
    this.invoiceForm.reset();
  }
  }

  getOrderData() {
    return this.http.get('http://localhost:4000/procument/placeOrder')
      .map((res: Response) => res.json())
  }

  getCompany(){
    this.getOrderData().subscribe(ord=> {
      console.log(ord);
      this.order = ord;
    })
  }
  

}
