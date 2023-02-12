import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindViewComponent } from './wind-view.component';

describe('WindViewComponent', () => {
  let component: WindViewComponent;
  let fixture: ComponentFixture<WindViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
