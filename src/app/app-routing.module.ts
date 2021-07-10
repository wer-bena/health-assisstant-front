import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {CreateProductComponent} from './component/create-product/create-product.component';
import {CaloricCalculationComponent} from './component/caloric-calculation/caloric-calculation.component';
import {PersonalResultsComponent} from './component/personal-results/personal-results.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'create-product',
    component: CreateProductComponent
  },
  {
    path: 'caloric-calculation',
    component: CaloricCalculationComponent
  },
  {
    path: 'personal-results',
    component: PersonalResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
