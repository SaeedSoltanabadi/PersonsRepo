import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonserviceService } from './personservice.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent
  ],
  imports: [
    HttpClientModule,

  BrowserModule,
    AppRoutingModule
  ],
  providers: [PersonserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
