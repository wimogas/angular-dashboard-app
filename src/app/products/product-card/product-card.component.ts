import {Component, Input, OnChanges} from '@angular/core';
import {NgOptimizedImage, NgStyle} from "@angular/common";
import {TrimPipe} from "../../_shared/trim.pipe";
import {PricePipe} from "../../_shared/price.pipe";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product: any
}
