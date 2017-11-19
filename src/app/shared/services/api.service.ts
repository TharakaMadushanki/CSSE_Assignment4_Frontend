import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { JwtService } from './jwtservice.service';

@Injectable()
export class ApiService {
  production: false;
  api_url: 'http://localhost:3000/api/authenticate';
  constructor(private http: Http,
    private jwtService: JwtService) { }

  // Setting Headers for API Request
  private setHeaders(): Headers {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    if (this.jwtService.getToken()) {
      headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
    }
    return new Headers(headersConfig);
  }

  // Format Error Messages
  private formatErrors(error: any) {
    return Observable.throw(error.json());
  }

  // Perform a GET Request
  get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.get(`${this.api_url}${path}`, { headers: this.setHeaders(), search: params })
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  // Perform a PUT Request
  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${this.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  // Perform POST Request
  post(path, body): Observable<any> {
    return this.http.post(
      `${this.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
    .catch(res => {
      console.log('err');
      console.log(res);
      return Observable.throw(res.json());
    })
    .map((res: Response) => res.json());
  }

  // Perform Delete Request
  delete(path): Observable<any> {
    return this.http.delete(
      `${this.api_url}${path}`,
      { headers: this.setHeaders() }
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  doSometing(param) {
    console.log('Param : ' + param);
  }
}
