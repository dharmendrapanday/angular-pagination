import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // maps each tab index to a route
  tabs = ['/home', '/second', '/third', '/student-section', '/student-library'];
  selectedTabIndex = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // pick the active tab from the current URL
    const idx = this.tabs.findIndex(path => this.router.url.startsWith(path));
    this.selectedTabIndex = idx !== -1 ? idx : 0;
  }

  onTabChange(event: any): void {
    const route = this.tabs[event.index];
    if (route) {
      this.router.navigateByUrl(route);
    }
  }

  redirectHomePage(): void {
    const idx = this.tabs.indexOf('/home');
    this.router.navigateByUrl('/home').then(() => this.selectedTabIndex = idx);
  }
}
