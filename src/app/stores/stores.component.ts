import { Component } from '@angular/core';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent {
  storeMetrics = {
    totalStores: 12,
    activeStores: 10,
    totalRevenue: 125000,
    totalOrders: 458
  };

  topStores = [
    { name: 'Downtown Store', orders: 150, revenue: 45000, status: 'Active' },
    { name: 'Mall Plaza', orders: 245, revenue: 38000, status: 'Active' },
    { name: 'City Center', orders: 89, revenue: 12000, status: 'Active' },
    { name: 'West Branch', orders: 178, revenue: 28000, status: 'Active' },
    { name: 'East Side', orders: 112, revenue: 22000, status: 'Active' }
  ];
}

