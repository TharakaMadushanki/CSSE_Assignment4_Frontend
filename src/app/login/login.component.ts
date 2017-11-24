import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { adminUser } from '../shared/models/adminUser';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  EmptyCredential: boolean;
  invalidCredential: boolean;
  notRegisterd: boolean;
  //loginuser : any = {};
  constructor(private loginService: UserService, private router: Router, private http: Http) { }

  ngOnInit() {
    this.invalidCredential = false;
    this.EmptyCredential = false;
    this.notRegisterd = false;
    
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }
  reset() {
    this.invalidCredential = false;
    this.EmptyCredential = false;
  }
  onSubmit() {
    var loginpassword: String;
    console.log(this.loginForm.get('username').value);
    if (!this.loginForm.get('username').value || !this.loginForm.get('password').value) {
      this.EmptyCredential = true;
      this.invalidCredential = false;
      console.log('empty');
    } else {
      console.log('not empty');
      const user: adminUser = new adminUser();
      user.username = this.loginForm.get('username').value;
      user.password = this.loginForm.get('password').value;
      this.EmptyCredential = false;

      console.log('typed un '+user.username);
      console.log('typed pw '+ user.password);

      (this.http.get('http://localhost:4000/procument/user/'+user.username)
      .map((res: Response) => res.json())).subscribe(dbuser => {
        if (dbuser != null) {
          loginpassword = dbuser.password;
          this.notRegisterd = false;
          if (user.password == loginpassword) {
            this.invalidCredential = false;
            console.log("loged in success!!!");
            //this.router.navigate(['/home']);
            this.router.navigateByUrl('/dashboard/home');
          }
          else{
            this.invalidCredential = true;
            console.log("loged in not success!!!");
          } 
        }
        else{
          this.notRegisterd = true;
          console.log("loged in not success!!!");
        }


      });


    }
    
  }


}
