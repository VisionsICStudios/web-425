import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FruitComponent } from './fruit/fruit.component';
import { FruitService } from './fruit/fruit.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FruitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FruitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
