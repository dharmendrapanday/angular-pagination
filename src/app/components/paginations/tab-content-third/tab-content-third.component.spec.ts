import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContentThirdComponent } from './tab-content-third.component';

describe('TabContentThirdComponent', () => {
  let component: TabContentThirdComponent;
  let fixture: ComponentFixture<TabContentThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabContentThirdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabContentThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
