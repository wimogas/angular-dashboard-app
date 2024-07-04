import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../products/products.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  products: any = []

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getFeaturedProducts().subscribe({
      next: data => this.products = data
    })
  }

}
