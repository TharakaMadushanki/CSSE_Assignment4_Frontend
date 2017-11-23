import { Component, OnInit } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.scss']
})
export class ViewInvoiceComponent implements OnInit {

  invoice: any[''];

  constructor(private http: Http) { }

  ngOnInit() {

    this.invoice = this.getInvoiceDetails()
  }

  getInvoiceDetails() {
    return this.http.get('http://localhost:8080/procument/invoices')
      .map((res: Response) => res.json())
  }

}

