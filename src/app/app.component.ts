import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss' ]
})
export class AppComponent {
  title = 'Tracified';


  constructor(private http: Http){
    
  }

  getDate() {
    return this.http.get('http://localhost:3000/login')
    .map((res: Response) => console.log(res));
  }




}
