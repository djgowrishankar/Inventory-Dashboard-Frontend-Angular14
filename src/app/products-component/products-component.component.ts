import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent implements OnInit {
  productMetrics = {
    totalProducts: 2541,
    activeProducts: 2100,
    lowStock: 45,
    outOfStock: 12
  };

  topProducts = [
    { name: 'Nike Air Max', sales: 234, revenue: 46800 },
    { name: 'Levi\'s 501 Jeans', sales: 198, revenue: 17820 },
    { name: 'Samsung TV', sales: 156, revenue: 78000 }
  ];

  ngOnInit() {
    this.initSalesChart();
    this.initCategoryChart();
  }

  initSalesChart() {
    const ctx = document.getElementById('productSalesChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Product Sales',
          data: [650, 590, 800, 810, 960, 1000],
          borderColor: '#7C3AED',
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }

  initCategoryChart() {
    const ctx = document.getElementById('categoryDistribution') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Electronics', 'Clothing', 'Accessories', 'Home & Living'],
        datasets: [{
          data: [30, 25, 20, 25],
          backgroundColor: [
            '#7C3AED',
            '#3B82F6',
            '#10B981',
            '#F59E0B'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
}