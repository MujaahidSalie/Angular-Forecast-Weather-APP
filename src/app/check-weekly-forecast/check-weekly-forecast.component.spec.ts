import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckWeeklyForecastComponent } from './check-weekly-forecast.component';

describe('CheckWeeklyForecastComponent', () => {
  let component: CheckWeeklyForecastComponent;
  let fixture: ComponentFixture<CheckWeeklyForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckWeeklyForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckWeeklyForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
