import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef
} from '@angular/core';
import {
  FormControl,
  FormGroup
} from '@angular/forms';

import { Guid } from 'guid-typescript';
import {
  BsModalRef,
  BsModalService
} from 'ngx-bootstrap/modal';

import { PersonserviceService } from '../../personservice.service';
import { person } from '../person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
    public modalRef: BsModalRef; 

  @Output() formSubmitted = new EventEmitter<string>();
  public personForm= new FormGroup({
    id :new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),

  });

  constructor(private personService:PersonserviceService,private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }
   public onSubmit() {
debugger
 const formValue= this.personForm.value;
  const newPerson = new person(Guid.create().toString(),formValue.firstName,formValue.lastName);
  this.personService.addPerson(newPerson).subscribe(()=>{
    debugger;
    this.formSubmitted.emit();
  });
}
}
