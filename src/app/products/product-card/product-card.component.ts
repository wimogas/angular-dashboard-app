import {Component, Input, OnChanges} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TrimPipe} from "../../shared/trim.pipe";
import {PricePipe} from "../../shared/price.pipe";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TrimPipe,
    PricePipe
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product: any

}
