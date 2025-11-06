import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatToolbar } from '@angular/material/toolbar';
import {navbarData,NavbarItem} from './../../../../assets/data/models/navbar-data';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [MatToolbar,MatButtonModule,MatIcon,MatSlideToggle,RouterLink],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar {
 navbarData:NavbarItem[] = navbarData;
 title = 'BJCMS';
}
