import {Component, OnInit} from '@angular/core';
import {ProductsService} from "./products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  page = 1

  constructor(
    private productsService: ProductsService
  ) {
  }

  ngOnInit() {
    this.productsService.getProducts().subscribe()
  }
}
