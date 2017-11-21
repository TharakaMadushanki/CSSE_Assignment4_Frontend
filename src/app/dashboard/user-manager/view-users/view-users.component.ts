import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http'
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

  ngOnInit() {
    this.getData();
    this.getCompany();
  }


  getData(){
    return this.http.get('http://localhost:4000/procument/company')
    .map((res: Response)=>res.json())
  }

  getCompany(){
    this.getData().subscribe(com=> {
      console.log(com);
      this.company = com
    })
  }



}
