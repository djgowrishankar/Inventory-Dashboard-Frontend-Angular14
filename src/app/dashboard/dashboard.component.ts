import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  recentActivity = {
    newItems: 741,
    newOrders: 123,
    refunds: 12,
    messages: 1,
    groups: 4
  };

  stores = [
    { location: 'Manchester, UK', employees: 23, items: 308, orders: 2 },
    { location: 'Yorkshire, UK', employees: 11, items: 291, orders: 15 },
    { location: 'Hull, UK', employees: 5, items: 43, orders: 11 },
    { location: 'Leicester, UK', employees: 36, items: 241, orders: 8 }
  ];

  stockNumbers = {
    lowStockItems: 12,
    itemCategories: 6,
    refundedItems: 1
  };

  ngOnInit() {
    this.initSalesChart();
  }

  initSalesChart() {
    const ctx = document.getElementById('salesChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Confirmed', 'Packed', 'Refunded', 'Shipped'],
        datasets: [{
          data: [30, 45, 15, 55],
          backgroundColor: '#7C3AED',
          borderRadius: 8
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: true,
              color: '#E5E7EB'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  }
}