import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewUsersComponent implements OnInit {

  company : any = [];

  constructor(private http: Http) { }
//this function is automatically called when the specific page(view User.html) is load
    ngOnInit() {
      //calling the two functions to extract data
    this.getData();
    this.getCompany();
  }

//getting data from the get request
  getData(){
    return this.http.get('http://localhost:8080/procument/company')
    .map((res: Response)=>res.json())
  }

  //adding data to company vaiable (define upper) which are got from getdata() 
  getCompany(){
    this.getData().subscribe(com=> {
      console.log(com);
      this.company = com;
    })
  }



}
