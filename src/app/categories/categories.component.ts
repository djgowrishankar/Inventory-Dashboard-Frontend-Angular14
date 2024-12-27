import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryMetrics = {
    totalCategories: 20,
    activeCategories: 18,
    inactiveCategories: 2
  };

  topCategories = [
    { name: 'Electronics', products: 500, revenue: 250000 },
    { name: 'Clothing', products: 300, revenue: 150000 },
    { name: 'Home & Living', products: 150, revenue: 90000 }
  ];

  ngOnInit() {
    this.initCategoryDistributionChart();
    this.initRevenueTrendChart();
  }

  initCategoryDistributionChart() {
    const ctx = document.getElementById('categoryDistributionChart') as HTMLCanvasElement;
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

  initRevenueTrendChart() {
    const ctx = document.getElementById('categoryRevenueTrendChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Revenue Trend',
          data: [20000, 25000, 30000, 35000, 40000, 45000],
          borderColor: '#3B82F6',
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
}