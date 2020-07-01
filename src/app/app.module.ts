import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SideNavigationComponent } from './sections/home/side-navigation/side-navigation.component';
import { DynamicContentComponent } from './sections/home/dynamic-content/dynamic-content.component';
import { LoginComponent } from './sections/login/login.component';
import { HomeComponent } from './sections/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as $ from 'jquery';


@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    DynamicContentComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
