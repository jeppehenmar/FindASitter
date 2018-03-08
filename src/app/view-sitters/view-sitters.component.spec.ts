import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSittersComponent } from './view-sitters.component';

describe('ViewSittersComponent', () => {
  let component: ViewSittersComponent;
  let fixture: ComponentFixture<ViewSittersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSittersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
