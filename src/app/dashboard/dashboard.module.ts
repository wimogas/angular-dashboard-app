import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from "./dashboard.component";
import {ListComponent} from "./list/list.component";
import {ChartComponent} from "./chart/chart.component";


@NgModule({
  declarations: [
    DashboardComponent,
    ListComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
