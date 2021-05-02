import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { person } from '../person/person';
import { PersonserviceService } from '../personservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
public personn:person;
public personId:string;
  constructor(private route: ActivatedRoute,private detailsService:PersonserviceService ) {
    this.route.queryParamMap.subscribe(params =>
      this.personId=params.get('id'));

     this.detailsService.getDetails(this.personId).subscribe((res) =>{

      this.personn= res as person;
      console.log(this.personn);
    })
  }

  ngOnInit(): void {

  }



}
