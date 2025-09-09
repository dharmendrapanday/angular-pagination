import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContentSecondComponent } from './tab-content-second.component';

describe('TabContentSecondComponent', () => {
  let component: TabContentSecondComponent;
  let fixture: ComponentFixture<TabContentSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabContentSecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabContentSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
