import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

import { person } from 'src/app/person/person';

import { PersonserviceService } from '../personservice.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  public persons:person[];
  public showPersonForm=false;

  constructor(private personserviceService :PersonserviceService,private route:Router) {
    this.personserviceService.getpersons().subscribe((res) =>{
      debugger
      this.persons= res as person[];
    })
  }

  ngOnInit(): void {
  }
public onAddPerson(){
  debugger
  this.showPersonForm=true;
}
public hidePersonForm():any{
  this.showPersonForm = false;
   this.personserviceService.getpersons().subscribe((res) =>{
      debugger
      this.persons= res as person[];
    })
}
 public navigate(){
this.route.navigate(['details']);
}
}

