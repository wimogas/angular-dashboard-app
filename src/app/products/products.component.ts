import {Component, OnInit} from '@angular/core';
import {ProductsService} from "./products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
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
    this.productsService.getProducts().subscribe({
      next: data => {
        this.limit = this.productsService.limit
        this.end += this.limit
        this.products = [...data]
        this.total = this.products.length
        this.paginatedProducts = [...data].slice(this.start, this.end)
      }
    })
  }

  pageDown() {
    this.start = this.start - this.productsService.limit
    this.end-= this.productsService.limit
    this.paginatedProducts = [...this.products].slice(this.start, this.end)
  }

  pageUp() {
    this.start = this.start + this.productsService.limit
    this.end+= this.productsService.limit
    this.paginatedProducts = [...this.products].slice(this.start, this.end)
  }
}
