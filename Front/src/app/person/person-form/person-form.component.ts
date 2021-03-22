import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup
} from '@angular/forms';

import { Guid } from 'guid-typescript';

import { PersonserviceService } from '../../personservice.service';
import { person } from '../person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  public personForm= new FormGroup({
    id :new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),

  });

  constructor(private personService:PersonserviceService) { }

  ngOnInit(): void {
  }
   onSubmit() {
debugger
 const formValue= this.personForm.value;
  console.warn(this.personForm.value);
  const newPerson = new person(Guid.create().toString(),formValue.firstName,formValue.lastName);
  this.personService.addPerson(newPerson).subscribe((res)=>{
    debugger
  });
}
}
