import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBabiesComponent } from './view-babies.component';

describe('ViewBabiesComponent', () => {
  let component: ViewBabiesComponent;
  let fixture: ComponentFixture<ViewBabiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBabiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBabiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
