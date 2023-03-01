import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Layer1Component } from './layers/layer1/layer1.component';
import { Layer2Component } from './layers/layer2/layer2.component';
import { Layer3Component } from './layers/layer3/layer3.component';

  @NgModule({
  declarations: [
    AppComponent,
    Layer1Component,
    Layer2Component,
    Layer3Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
