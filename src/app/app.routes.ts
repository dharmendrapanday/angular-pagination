import { Routes } from '@angular/router';
import { StudentSectionComponent } from './components/student-section/student-section.component';
import { TabContentFirstComponent } from './components/paginations/tab-content-first/tab-content-first.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { TabContentSecondComponent } from './components/paginations/tab-content-second/tab-content-second.component';
import { TabContentThirdComponent } from './components/paginations/tab-content-third/tab-content-third.component';

export const routes: Routes = [
  { path: 'home', component: TabContentFirstComponent },
  {
    path: 'student-section',
    component: StudentSectionComponent,
    children: [
      { path: 'all-students', component: TabContentFirstComponent },
      // This path is specifically for adding a student
      { path: 'add-student', component: StudentDetailsComponent },
      // This path is for viewing student details (often with an ID)
      { path: 'student-details', component: StudentDetailsComponent },
      // Default child route
      { path: '', redirectTo: 'all-students', pathMatch: 'full' },
    ],
  },
  { path: 'second', component: TabContentSecondComponent},
  { path: 'third', component: TabContentThirdComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];