import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { person } from 'src/app/person/person';

@Injectable({
  providedIn: 'root'
})
export class PersonserviceService {
  apiURL = 'http://localhost:5000/api/Persons';

  constructor(private httpClient: HttpClient ) { }
  public addPerson(person:person):any{
    return this.httpClient.post(`${this.apiURL}`,person);

  }

  public getpersons():any{
    return this.httpClient.get(`${this.apiURL}`);
  }
}
