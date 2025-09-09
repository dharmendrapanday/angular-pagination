import { Component } from '@angular/core';
import { DynamicTableComponent } from "../dynamic-table/dynamic-table.component";

@Component({
  selector: 'app-tab-content-first',
  imports: [DynamicTableComponent],
  templateUrl: './tab-content-first.component.html',
  styleUrl: './tab-content-first.component.scss'
})
export class TabContentFirstComponent {

}
