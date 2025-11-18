import { Component } from '@angular/core';

import { HeaderComponent } from "./components/header/header.component";
import { Footer } from "./shared/components/footer/footer";
import { RouterOutlet } from '@angular/router';
import { MatTabNav, MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { Navbar } from './shared/components/navbar/navbar';
import{Home} from './layout/home/home'
import { LoginComponent } from './layout/login/login.component';
import { SignupComponent } from './layout/signup/signup.component';
@Component({
  selector: 'app-root',
    imports: [CommonModule,HeaderComponent,LoginComponent,SignupComponent, Footer,RouterOutlet,MatTabsModule,Navbar,Home],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
}) 
export class AppComponent {
  title = 'angular-paginations';
currentTab: any;
}
