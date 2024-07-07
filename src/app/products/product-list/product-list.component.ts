import { Component } from '@angular/core';
import {ProductsService} from "../../_services/products.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  loading = false
  products: any = []
  paginatedProducts: any = []
  start = 0
  end = 0
  total = 0
  limit = 0

  constructor(
    private productsService: ProductsService
  ) {
  }

  ngOnInit() {
    this.loading = true
    this.productsService.getProducts().subscribe({
      next: data => {
        this.limit = this.productsService.limit
        this.end += this.limit
        this.products = [...data]
        this.total = this.products.length
        this.paginatedProducts = [...data].slice(this.start, this.end)
        this.loading = false
      }
    })
  }

  pageDown() {
    this.start -= this.productsService.limit
    this.end -= this.productsService.limit
    this.paginatedProducts = [...this.products].slice(this.start, this.end)
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  pageUp() {
    this.start += this.productsService.limit
    this.end += this.productsService.limit
    this.paginatedProducts = [...this.products].slice(this.start, this.end)
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
