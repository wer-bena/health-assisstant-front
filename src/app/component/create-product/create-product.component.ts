import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product_service/product.service';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  name: string = null;
  calories: number = null;
  proteins: number = null;
  carbohydrates: number = null;
  fats: number = null;

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(){
    this.productService
      .createProduct(this.name, this.calories, this.proteins, this.carbohydrates, this.fats)
      .subscribe(data => {
        window.alert('Pomyślnie dodano produkt do bazy.');
        this.router.navigate(['/home']);
      }, error => {
        window.alert(error.error);
      });
  }

}
