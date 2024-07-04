import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from "./dashboard.component";
import {ListComponent} from "./list/list.component";
import {ChartComponent} from "./chart/chart.component";
import {TrimPipe} from "../shared/trim.pipe";
import {PricePipe} from "../shared/price.pipe";


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
        PricePipe
    ]
})
export class DashboardModule { }
