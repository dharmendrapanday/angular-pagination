import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-student-section',
  imports: [MatButtonModule, MatDividerModule,
    MatIconModule,RouterOutlet,RouterLink],
  templateUrl: './student-section.component.html',
  styleUrl: './student-section.component.css'
}) 
export class StudentSectionComponent { 
 
}  
