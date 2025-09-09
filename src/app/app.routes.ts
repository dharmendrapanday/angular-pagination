import { Routes } from '@angular/router';
import { PaginationComponent } from './components/paginations/pagination/pagination.component';
import { DynamicTableComponent } from './components/paginations/dynamic-table/dynamic-table.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'table',
    pathMatch: 'full',
  },
  {
    path: '',
    component: PaginationComponent, // wrapper with header + footer
    children: [
      { path: 'table', component: DynamicTableComponent },
    ],
  },
  {
    path: 'home',
    component: PaginationComponent,
  },
];

