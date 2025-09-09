import { Student } from './students';

export interface ColumnMdl {
  sortable?: boolean;
  field: keyof Student;
  header: string;
}

export const header: ColumnMdl[] = [
  { field: 'id', header: 'ID', sortable: true },
  { field: 'name', header: 'Name', sortable: true },
  { field: 'email', header: 'Email', sortable: false },
  { field: 'age', header: 'Age', sortable: true }, // added sortable (optional)
  { field: 'grade', header: 'Grade', sortable: true },
  { field: 'department', header: 'Department', sortable: true },
  { field: 'phone', header: 'Phone', sortable: false },
];
