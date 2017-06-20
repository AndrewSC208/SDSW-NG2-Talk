import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material.module';

import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './shared/404.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HomeModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

