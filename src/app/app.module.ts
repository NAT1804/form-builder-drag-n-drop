import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PolymorpheusModule } from "@tinkoff/ng-polymorpheus";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DataModule } from './data/data.module';
import { CoreModule } from './core/core.module';

// Layout Component
import { NavComponent } from './layout/nav/nav.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { GridLayoutComponent } from './layout/grid-layout/grid-layout.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Core Module
    CoreModule,

    // Shared Module
    SharedModule,

    // Data Module
    DataModule,

    PolymorpheusModule,
  ],
  declarations: [
    AppComponent,

    // Layout
    NavComponent,
    HomeLayoutComponent,
    GridLayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
