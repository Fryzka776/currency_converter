import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ConverterInfoComponent } from './converter-info/converter-info.component';
import { ArrowComponent } from './arrow/arrow.component';
import {SkeletonModule} from 'primeng/skeleton';




@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    ConverterInfoComponent,
    ArrowComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CardModule,
    ButtonModule,
    InputNumberModule,
    DropdownModule,
    InputTextModule,
    SkeletonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
