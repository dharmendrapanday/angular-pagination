import { Routes } from '@angular/router';
import { PaginationComponent } from './components/paginations/pagination/pagination.component';
import { DynamicTableComponent } from './components/paginations/dynamic-table/dynamic-table.component';
import { StudentDetailsComponent } from './components/paginations/student-details/student-details.component';

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
  {
    path: 'stduent-details',
    component: StudentDetailsComponent,
  },
];

