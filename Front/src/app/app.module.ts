import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  PersonFormComponent
} from './person/person-form/person-form.component';
import { PersonComponent } from './person/person.component';
import { PersonserviceService } from './personservice.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonFormComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,

  BrowserModule,
    AppRoutingModule
  ],
  providers: [PersonserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
