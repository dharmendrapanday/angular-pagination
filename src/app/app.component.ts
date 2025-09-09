import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginationComponent } from "./components/paginations/pagination/pagination.component";

@Component({
  selector: 'app-root',
  imports: [PaginationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-paginations';
}
