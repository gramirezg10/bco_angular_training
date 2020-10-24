import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { Class1Component } from './class1/class1.component';
import { Workshop1aComponent } from './workshop1a/workshop1a.component';
import { Workshop1bComponent } from './workshop1b/workshop1b.component';
import { Workshop1cComponent } from './workshop1c/workshop1c.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    Class1Component,
    Workshop1aComponent,
    Workshop1bComponent,
    Workshop1cComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
