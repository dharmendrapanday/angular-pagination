import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [MatTabsModule, MatIconModule,MatToolbarModule,MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router){}
  redirectHomePage(event: Event) {
    event.preventDefault();
    this.router.navigate(['/home']);


}
  @Output() tabChanged = new EventEmitter<number>();

  defaultTab = 0; // default first tab

  ngOnInit(): void {
    this.tabChanged.emit(this.defaultTab); // send default value to parent
  }

  onTabChange(event: MatTabChangeEvent) {
    this.tabChanged.emit(event.index); // now TypeScript knows "index" exists
  }
}
