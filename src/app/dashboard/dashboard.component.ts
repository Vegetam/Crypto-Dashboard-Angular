/*
import {Component} from '@angular/core';
// import AppService
import {AppService} from '../app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AppService]
})
export class DashboardComponent {
results: string[];
data: string[][];
coinValue: any;
coinSymbol: any;
API_BASE_URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
 key = '?CMC_PRO_API_KEY=8ccfe4e8-7cf1-4a84-9b2f-f0047b8d3365';
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {}
  ngOnInit(): void {

    // Make the HTTP request:
     this.http
    .get(this.API_BASE_URL + this.key)
    .subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
	  console.log(data);
	  //console.log(JSON.stringify(data.data));
	 /* let i;
	  this.coinValue = [];
	 this.coinSymbol = [];
	for (i = 0; i < data.data.length; i++) { 
			  this.coinValue += data.data[i].name;
			  this.coinSymbol += data.data[i].symbol;
				}
			console.log(this.coinValue);

	});
}
}
*/
import {Component} from '@angular/core';
// import AppService
import {AppService} from '../app.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AppService] // provider setup
})
export class DashboardComponent {}