import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
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
    this.supplierForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
      landline: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])

    });
  }

  addSupplier() {
    var addsupplier = {
      supplierName : this.supplierForm.controls['name'].value,
      Address: this.supplierForm.controls['address'].value,
      contactNumber:{landline: this.supplierForm.controls['landline'].value,
                    Mobile: this.supplierForm.controls['mobile'].value},     
      email: this.supplierForm.controls['email'].value
    };

    if (this.supplierForm.controls['name'].value == "" || this.supplierForm.controls['address'].value == "" || this.supplierForm.controls['landline'].value == "" || this.supplierForm.controls['mobile'].value == "" || this.supplierForm.controls['email'].value == "") {
      alert("Please fill all the fields.")
    }
    else {
      console.log(addsupplier);
      this.http.post('http://localhost:4000/procument/supplier', addsupplier).subscribe(
        function (response) {
          alert("Supplier Added Successfully !");
        },
        function (error) {
          alert("Error occured while saving data" + error);
        },
      );
      this.supplierForm.reset();
    }
  }

}
