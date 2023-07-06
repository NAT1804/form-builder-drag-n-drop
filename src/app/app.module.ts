import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiDimensionalViewComponent } from './multi-dimensional-view/multi-dimensional-view.component';
import { PolymorpheusModule } from "@tinkoff/ng-polymorpheus";

@NgModule({
  declarations: [
    AppComponent,
    MultiDimensionalViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PolymorpheusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
