import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-finances',
  templateUrl: './finances.component.html',
  styleUrls: ['./finances.component.css']
})
export class FinancesComponent implements OnInit {
  financialMetrics = {
    totalRevenue: 500000,
    netProfit: 150000,
    totalOrders: 1200,
    totalExpenses: 350000
  };

  recentTransactions = [
    { id: 'TRX001', date: '2024-03-25', type: 'Income', amount: 5000, status: 'Completed' },
    { id: 'TRX002', date: '2024-03-24', type: 'Expense', amount: 2500, status: 'Pending' },
    { id: 'TRX003', date: '2024-03-24', type: 'Income', amount: 3500, status: 'Completed' },
    { id: 'TRX004', date: '2024-03-23', type: 'Expense', amount: 1800, status: 'Failed' },
    { id: 'TRX005', date: '2024-03-23', type: 'Income', amount: 4200, status: 'Completed' }
  ];

  ngOnInit() {
    this.initRevenueExpensesChart();
    this.initProfitDistributionChart();
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'status-badge status-success';
      case 'pending':
        return 'status-badge status-warning';
      case 'failed':
        return 'status-badge status-danger';
      default:
        return 'status-badge';
    }
  }

  initRevenueExpensesChart() {
    const ctx = document.getElementById('revenueExpensesChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Revenue',
            data: [45000, 52000, 49000, 60000, 55000, 65000],
            borderColor: '#10B981',
            tension: 0.4
          },
          {
            label: 'Expenses',
            data: [30000, 35000, 32000, 38000, 33000, 40000],
            borderColor: '#EF4444',
            tension: 0.4
          }
        ]
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

  initProfitDistributionChart() {
    const ctx = document.getElementById('profitDistributionChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Electronics', 'Clothing', 'Home & Living', 'Accessories'],
        datasets: [{
          data: [35, 25, 20, 20],
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