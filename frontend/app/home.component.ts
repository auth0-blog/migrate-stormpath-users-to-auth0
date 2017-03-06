import { Component }  from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Auth }       from './auth.service';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'home',
  template: `
    <h4 *ngIf="auth.authenticated()">You are logged in</h4>
    <h4 *ngIf="!auth.authenticated()">You are not logged in, please click 'Log in' button to login</h4>

    <h1><a (click)="callPublicAPI()">Call Public API</a></h1>
    <h1><a (click)="callPrivateAPI()">Call Private API</a></h1>
  `
})

export class HomeComponent {
  private headers: Headers;
  private options: RequestOptions;
  constructor(private auth: Auth, private http: Http) {}

  public callPublicAPI() {
    this.http.get('http://localhost:4000/public').subscribe(
      data => {
        let response = data.json();
        alert(response.message);
      },
      error => {
        console.log(error);
      }
    );
  }

  public callPrivateAPI() {
    this.headers = new Headers();
    this.options = new RequestOptions({headers: this.headers})
    this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('id_token'));
    console.log(localStorage.getItem('idToken'));
    this.http.get('http://localhost:4000/secure', this.options).subscribe(
      data => {
        let response = data.json();
        console.log(response);
        alert(response.message);
      },
      error => {
        let response = error.json();
        console.log(response);
        alert(response.message);
      }
    );
  }
};
