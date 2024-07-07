import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../_services/products.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  loading = false
  products: any = []

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.loading = true
    this.productsService.getFeaturedProducts().subscribe({
      next: data => {
        this.products = data
        this.loading = false
      }
    })
  }
}
