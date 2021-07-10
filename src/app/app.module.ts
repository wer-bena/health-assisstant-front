import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CreateProductComponent } from './component/create-product/create-product.component';
import {FormsModule} from '@angular/forms';
import { CaloricCalculationComponent } from './component/caloric-calculation/caloric-calculation.component';
import {HttpClientModule} from '@angular/common/http';
import { PersonalResultsComponent } from './component/personal-results/personal-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateProductComponent,
    CaloricCalculationComponent,
    PersonalResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
