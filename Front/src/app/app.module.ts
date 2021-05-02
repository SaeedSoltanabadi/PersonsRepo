import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  PersonFormComponent
} from './person/person-form/person-form.component';
import { PersonComponent } from './person/person.component';
import { PersonserviceService } from './personservice.service';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonFormComponent,
    DetailsComponent,

  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
     BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),

  BrowserModule,
    AppRoutingModule
  ],
  providers: [PersonserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
