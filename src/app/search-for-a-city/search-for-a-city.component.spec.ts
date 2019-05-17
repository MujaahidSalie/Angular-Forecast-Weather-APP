import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForACityComponent } from './search-for-a-city.component';

describe('SearchForACityComponent', () => {
  let component: SearchForACityComponent;
  let fixture: ComponentFixture<SearchForACityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchForACityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForACityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
