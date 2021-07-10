import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {api} from '../../../environments/api';

@Injectable({
  providedIn: 'root'
})
export class CaloriesService {

  constructor(private http: HttpClient) { }

  calculatePersonalResults(sex: string,
                           age: number,
                           weight: number,
                           height: number){
    const params = new HttpParams()
      .set('sex', sex)
      .set('age', String(age))
      .set('weight', String(weight))
      .set('height', String(height));
    return this
      .http
      .get(
        api.url + '/calories',
        {params}
      );
  }

}
