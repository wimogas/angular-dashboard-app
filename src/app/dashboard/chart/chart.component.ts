import {Component, OnInit} from '@angular/core';
import {ChartOptions} from "chart.js";
import {ProductsService} from "../../_services/products.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit {
  loading = false

  pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  pieChartLabels = [
    '', '', '', ''
  ];
  pieChartDatasets = [{
      data: [0, 0, 0, 0]
    }];
  pieChartLegend = true;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.loading = true
    this.productsService.getCategoriesData().subscribe({
      next: data => {
        this.pieChartLabels = data.labels
        this.pieChartDatasets[0].data = data.data
        this.loading = false
      }
    })
  }
}
