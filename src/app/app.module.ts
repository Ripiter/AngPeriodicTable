import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableGenComponent } from './table-gen/table-gen.component';
import { HttpClientModule } from '@angular/common/http';
import { ElementCompComponent } from './element-comp/element-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    TableGenComponent,
    ElementCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
