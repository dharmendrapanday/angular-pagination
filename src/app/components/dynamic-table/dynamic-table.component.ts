import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Student } from '../../../assets/data/models/students';
import { ColumnMdl, header } from '../../../assets/data/models/columns';
import { STUDENT_DATA } from '../../../assets/data/students';

@Component({
  selector: 'app-dynamic-table',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatPaginatorModule],
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css'],
})
export class DynamicTableComponent implements OnInit {
  sortField: keyof Student | '' = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  columns: ColumnMdl[] = [];
  data: Student[] = [];
  paginatedData: Student[] = [];

  length = 0; // total number of records
  pageSize = 10; // default page size
  pageSizeOptions = [2, 5, 10, 25, 100];
  pageIndex = 0;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.columns = header;
    this.data = STUDENT_DATA.students;
    this.length = this.data.length;
    this.updatePaginatedData();
  }

  sortColumn(col: ColumnMdl) {
    if (!col.sortable) return;
    if (this.sortField === col.field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = col.field;
      this.sortDirection = 'asc';
    }

    this.data.sort((a, b) => {
      const aValue = a[col.field];
      const bValue = b[col.field];
      if (aValue == null || bValue == null) return 0;
      return this.sortDirection === 'asc'
        ? aValue > bValue
          ? 1
          : -1
        : aValue < bValue
        ? 1
        : -1;
    });

    this.updatePaginatedData();
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedData();
  }

  private updatePaginatedData() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.data.slice(startIndex, endIndex);
  }

  onRowDblClick(row: any): void {
    console.log('Double-clicked row:', row);
    this.router.navigate(['/student-section/student-details'], { state: { student: row } });
  }
}
