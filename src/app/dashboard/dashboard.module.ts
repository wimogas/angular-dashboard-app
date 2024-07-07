import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from "./dashboard.component";
import {ListComponent} from "./list/list.component";
import {ChartComponent} from "./chart/chart.component";
import {TrimPipe} from "../shared/trim.pipe";
import {PricePipe} from "../shared/price.pipe";
import {SpinnerComponent} from "../shared/spinner/spinner/spinner.component";
import {BaseChartDirective, provideCharts, withDefaultRegisterables} from 'ng2-charts';
@NgModule({
  declarations: [
    DashboardComponent,
    ListComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgOptimizedImage,
    TrimPipe,
    PricePipe,
    SpinnerComponent,
    BaseChartDirective
  ],
  providers: [provideCharts(withDefaultRegisterables())],
})
export class DashboardModule { }
