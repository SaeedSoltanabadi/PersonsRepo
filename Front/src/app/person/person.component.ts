import {
  Component,
  OnInit
} from '@angular/core';

import { person } from 'src/person';

import { PersonserviceService } from '../personservice.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  public persons:person[];

  constructor(private personserviceService :PersonserviceService) { 
    this.personserviceService.getpersons().subscribe((res) =>{
      debugger
      this.persons= res as person[];
    })
  }

  ngOnInit(): void {
  }

}
