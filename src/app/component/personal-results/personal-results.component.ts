import { Component, OnInit } from '@angular/core';
import {CaloriesService} from '../../service/calories_service/calories.service';

@Component({
  selector: 'app-personal-results',
  templateUrl: './personal-results.component.html',
  styleUrls: ['./personal-results.component.css']
})
export class PersonalResultsComponent implements OnInit {

  sex: string;
  age: number = null;
  weight: number = null;
  height: number = null;
  result: any;
  bmiResult: string = null;

  constructor(private caloriesService: CaloriesService) { }

  ngOnInit(): void {
    this.sex = 'kobieta';
  }

  onItemChange(value) {
    this.sex = value;
  }

  calculateResults(){
    this.caloriesService
      .calculatePersonalResults(this.sex, this.age, this.weight, this.height)
      .subscribe(data => {
        this.result = data;
        if (this.result.bmi < 16) {
          this.bmiResult = 'wygłodzenie';
        }
        else if (this.result.bmi >= 16 && this.result.bmi < 17) {
          this.bmiResult = 'wychudzenie';
        }
        else if (this.result.bmi >= 17 && this.result.bmi < 18.5) {
          this.bmiResult = 'niedowaga';
        }
        else if (this.result.bmi >= 18.5 && this.result.bmi < 25) {
          this.bmiResult = 'wartość prawidłowa';
        }
        else if (this.result.bmi >= 25 && this.result.bmi < 30) {
          this.bmiResult = 'nadwaga';
        }
        else if (this.result.bmi >= 30 && this.result.bmi < 35) {
          this.bmiResult = 'otyłość I stopnia';
        }
        else if (this.result.bmi >= 35 && this.result.bmi < 40) {
          this.bmiResult = 'otyłość II stopnia';
        }
        else if (this.result.bmi >= 16) {
          this.bmiResult = 'otyłość III stopnia';
        }
      }, error => {
        window.alert(error.error());
      });
  }

  resetValues(){
    window.location.reload();
  }
}
