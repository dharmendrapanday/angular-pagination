import { Routes } from '@angular/router';
import { StudentSectionComponent } from './components/student-section/student-section.component';
import { TabContentFirstComponent } from './components/paginations/tab-content-first/tab-content-first.component';
import { TabContentSecondComponent } from './components/paginations/tab-content-second/tab-content-second.component';
import { TabContentThirdComponent } from './components/paginations/tab-content-third/tab-content-third.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';

export const routes: Routes = [
  { path: 'home', component: TabContentFirstComponent },
  { path: 'second', component: TabContentSecondComponent },
  { path: 'third', component: TabContentThirdComponent },
  { path: 'student-section', component: StudentSectionComponent },
  { path: 'student-details', component: StudentDetailsComponent },
  { path: 'add-student', component: StudentDetailsComponent },

  //({ path: 'student-library', component: StudentLibraryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
];
