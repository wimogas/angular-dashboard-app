import { Component } from '@angular/core';
import {ProductsService} from "../_services/products.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  loading = false
  categories: any = []

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.loading = true
    this.productsService.getCategoriesData().subscribe({
      next: data => {
        this.categories = Object.entries(data)
        console.log(this.categories)
        this.loading = false
      }
    })
  }
}
