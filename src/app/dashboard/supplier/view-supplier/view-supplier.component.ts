import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http'
import 'rxjs/add/operator/map';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-view-supplier',
  templateUrl: './view-supplier.component.html',
  styleUrls: ['./view-supplier.component.scss']
})
export class ViewSupplierComponent implements OnInit {

  suppliers: any = [];
  supplierForm: FormGroup;

  constructor(private http: Http, private formBuilder: FormBuilder) { }
  //this function is automatically called when the specific page is loaded
  ngOnInit() {
    //calling the two functions to extract data
    this.getSupplierData();
    this.getSupplier();

    this.supplierForm = this.formBuilder.group({
      supplierName: ['', Validators.required],
      address: ['', Validators.required],
      contactNumber: ['', Validators.required],
      email: ['', Validators.required],
    })
  }

  //getting Supplier data from the GET request
  getSupplierData() {
    return this.http.get('http://localhost:4000/procument/supplier')
      .map((res: Response) => res.json())
  }

  //adding data to suppliers variable (defined above)
  getSupplier() {
    this.getSupplierData().subscribe(supplier => {
      console.log(supplier);
      this.suppliers = supplier
    })
  }

  updateSupplier(id) {
        var editSupplier = {
          supplierName: this.supplierForm.controls['supplierName'].value,
          address: this.supplierForm.controls['address'].value,
          contactNumber: this.supplierForm.controls['contactNumber'].value,
          email: this.supplierForm.controls['email'].value
        };
      console.log(editSupplier);// editSupplier var contains all form values.
      this.http.put('http://localhost:4000/procument/supplier/'+id , editSupplier).subscribe();        
    
} 

}