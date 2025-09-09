export interface Student {
  id: number;
  name: string;
  age: number;
  grade: string;
  gpa: number;
  department: string;
  year: string;
  email: string;
  phone: string;
  address: string;
  enrolledDate: string; // or Date if you want to convert
}

export interface StudentData {
  page: number;
  pageSize: number;
  totalPages: number;
  totalRecords: number;
  students: Student[];
}