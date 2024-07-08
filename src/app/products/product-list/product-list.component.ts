import {Component, OnInit} from '@angular/core';
import {Product, ProductsService} from "../../_services/products.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  loading = false

  products: Product[] = []
  paginatedProducts: Product[] = []

  start = 0
  end = 0
  total = 0
  limit = 0
  category: string | null = null

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.category = this.route.snapshot.queryParamMap.get("cat");
    this.getProducts(this.category)
  }

  getProducts(category: string | null) {
    this.category = category
    this.loading = true
    this.productsService.getProducts(category).subscribe({
      next: data => {
        this.limit = this.productsService.limit
        this.start = 0
        this.end = this.limit
        this.products = [...data]
        this.total = this.products.length
        this.paginatedProducts = [...this.products].slice(this.start, this.end)
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

  resetFilters() {
    this.category = null
    this.router.navigate(['/products'], {
      queryParams: {
        'cat': null
      },
      queryParamsHandling: 'merge'
    })
    this.getProducts(this.category)
  }
}
