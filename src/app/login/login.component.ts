import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { adminUser} from '../shared/models/adminUser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss' ]
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  EmptyCredential: boolean;
  invalidCredential: boolean;
  constructor(private loginService: UserService, private router: Router) { }

  ngOnInit() {
    this.invalidCredential = false;
    this.EmptyCredential = false;
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
    console.log(this.loginForm.get('username').value);
    if (!this.loginForm.get('username').value || !this.loginForm.get('password').value) {
        this.EmptyCredential = true;
        this.invalidCredential = false;
        console.log('empty');
    }else {
      console.log('not empty');
      const user: adminUser = new adminUser();
        user.username = this.loginForm.get('username').value;
        user.password = this.loginForm.get('password').value;
        user.token = '';
        this.EmptyCredential = false;
        this.loginService.attemptLogin(user).subscribe((data) => {
            this.router.navigate(['/home']);
          }, (err) => {
            this.invalidCredential = true;
        });
  }
}}
