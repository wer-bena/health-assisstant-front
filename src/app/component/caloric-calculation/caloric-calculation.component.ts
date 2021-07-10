import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product_service/product.service';

@Component({
  selector: 'app-caloric-calculation',
  templateUrl: './caloric-calculation.component.html',
  styleUrls: ['./caloric-calculation.component.css']
})
export class CaloricCalculationComponent implements OnInit {

  products: any = [];
  product: any = null;
  selectedProducts: any = [];

  result = {
    calories: 0.0,
    proteins: 0.0,
    carbohydrates: 0.0,
    fats: 0.0
  };
  capacity: number = null;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService
      .getProducts()
      .subscribe(data => {
        this.products = data;
      }, error => {
        window.alert(error.error());
      });
  }

  selectProduct(product){
    this.capacity = null;
    this.product = product;
  }

  caloricCalculation(){
    this.selectedProducts.forEach(product => {
      this.result.calories += product.calories * (product.capacity / 100);
      this.result.proteins += product.proteins * (product.capacity / 100);
      this.result.carbohydrates += product.carbohydrates * (product.capacity / 100);
      this.result.fats += product.fats * (product.capacity / 100);
    });
  }

  addProduct(){
    this.clearResult();
    this.selectedProducts.push({name: this.product.name,
      calories: this.product.calories,
      proteins: this.product.proteins,
      carbohydrates: this.product.carbohydrates,
      fats: this.product.fats,
      capacity: this.capacity});
    this.caloricCalculation();
  }

  clearResult(){
    this.result.calories = 0;
    this.result.proteins = 0;
    this.result.carbohydrates = 0;
    this.result.fats = 0;
  }

  deleteProduct(selectedProduct) {
    this.clearResult();
    this.selectedProducts.forEach((product, index) => {
      if (product.name === selectedProduct.name && product.capacity === selectedProduct.capacity) {
        this.selectedProducts
          .splice(index, 1);
      }
    });
    this.caloricCalculation();
  }
}
