import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { adminUser } from '../models/adminUser';
import { JwtService } from './jwtservice.service';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
export class UserService {

  private currentUserSubject = new BehaviorSubject<adminUser>(new adminUser());
  public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  public isLogged = false;
  constructor(private apiService: ApiService, private jwtService: JwtService) {

  }

  // Attemp Login to the System
  attemptLogin(credentials: adminUser) {
    this.destroyAuth();
    return this.apiService.post('http://localhost:8080/procument/user/', {user: credentials})
    .map(
      data => {
        this.setAuth(data.user);
        return data;
      }
    );
  }

  // Store Authorization Information
  setAuth(user: adminUser) {
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);

    this.isLogged = true;
    console.log('isLogged : ' + this.isLogged);
  }

  destroyAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next(new adminUser());
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);

    this.isLogged = false;
  }

  errorHandler(error: any): void {
    console.log(error);
  }

}
