import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonserviceService {
  apiURL = 'http://localhost:5000/api/Persons';

  constructor(private httpclient: HttpClient ) { }
  public getpersons():any{
    return this.httpclient.get(`${this.apiURL}`);
  }
}
