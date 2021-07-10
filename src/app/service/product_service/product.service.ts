import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {api} from '../../../environments/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this
      .http
      .get(
        api.url + '/products'
      );
  }

  createProduct(name: string,
                calories: number,
                proteins: number,
                carbohydrates: number,
                fats: number){
    return this
      .http
      .post(
        api.url + '/products',
        {name, calories, proteins, carbohydrates, fats}
      );
  }
}
