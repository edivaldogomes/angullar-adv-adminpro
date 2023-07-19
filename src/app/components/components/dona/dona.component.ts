import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css'],
})
export class DonaComponent {
  // Doughnut
  public doughnutChartLabels: string[] = [
    'Descargar Ventas',
    'Ventas en tienda',
    'Venta por correspondencia',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [350, 450, 100] }],
  };
  public colors: Color[] = [
    // { backgroundColor: ['#9E120E', '#FF5800', '#FFB414'] },
  ];
}
