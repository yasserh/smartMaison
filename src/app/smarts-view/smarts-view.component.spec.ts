import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartsViewComponent } from './smarts-view.component';

describe('SmartsViewComponent', () => {
  let component: SmartsViewComponent;
  let fixture: ComponentFixture<SmartsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
