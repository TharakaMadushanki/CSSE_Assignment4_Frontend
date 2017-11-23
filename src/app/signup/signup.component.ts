import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/IuserModel';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { matchingPasswords } from '../shared/validation/validators';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss' ]
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  user : User;

  constructor(private http: Http, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      validator: matchingPasswords('password', 'password2')
    })
  };

  addUser() {
    if (this.signupForm.valid) {
        var adduser = {
          fullname: this.signupForm.controls['fullname'].value,
          username: this.signupForm.controls['username'].value,
          email: this.signupForm.controls['email'].value,
          password: this.signupForm.controls['password'].value
        };
      console.log(adduser);// adduser var contains all our form values. store it where you want
      this.http.post('http://localhost:8080/procument/user', adduser).subscribe(); 
      this.signupForm.reset();// this will reset our form values to null 
        
        
    }
}  



  getUserData(){
    return this.http.get('http://localhost:8080/procument/user')
    .map((res: Response)=>res.json())
  }

  //adding data to company vaiable (define upper) which are got from getdata() 
  getUserDetail(){
    this.getUserData().subscribe(usr=> {
      console.log(usr);
      this.user = usr;
    })
  }


}
