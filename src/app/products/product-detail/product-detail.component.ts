import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../_services/products.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  loading = false;
  product: any;
  id: any;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    this.loading = true
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.productService.getProductById(this.id).subscribe({
        next: (data) => {
          this.product = data
          this.loading = false
        }
      });
    }
  }
}
