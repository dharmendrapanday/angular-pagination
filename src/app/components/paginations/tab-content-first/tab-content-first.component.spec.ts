import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContentFirstComponent } from './tab-content-first.component';

describe('TabContentFirstComponent', () => {
  let component: TabContentFirstComponent;
  let fixture: ComponentFixture<TabContentFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabContentFirstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabContentFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
