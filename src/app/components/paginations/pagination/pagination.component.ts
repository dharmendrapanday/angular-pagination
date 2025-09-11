import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { TabContentFirstComponent } from "../tab-content-first/tab-content-first.component";
import { TabContentSecondComponent } from "../tab-content-second/tab-content-second.component";
import { TabContentThirdComponent } from "../tab-content-third/tab-content-third.component";
import { CommonModule } from '@angular/common';
import { StudentSectionComponent } from '../student-section/student-section.component';
@Component({
  selector: 'app-pagination',
  imports: [CommonModule, HeaderComponent, FooterComponent,
    TabContentFirstComponent, TabContentSecondComponent, TabContentThirdComponent,
    StudentSectionComponent
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
currentTab:any;

}
