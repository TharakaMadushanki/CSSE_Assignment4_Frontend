import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss']
})

export class AddSupplierComponent implements OnInit {

  supplierForm: FormGroup;
  constructor(private http: Http, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.supplierForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      mobile: ['', Validators.required],
      landline: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  addSupplier() {
    if (this.supplierForm.valid) {
        var addsupplier = {
          supplierName: this.supplierForm.controls['name'].value,
          Address: this.supplierForm.controls[' address'].value,
          landline: this.supplierForm.controls['landline'].value,
          Mobile: this.supplierForm.controls['mobile'].value,
          email: this.supplierForm.controls['email'].value
        };
      console.log(addsupplier);
      this.http.post('http://localhost:4000/procument/supplier', addsupplier).subscribe(); 
      this.supplierForm.reset();
        
        
    }
} 

}
