import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectStationComponent } from './select-station.component';

describe('SelectStationComponent', () => {
  let component: SelectStationComponent;
  let fixture: ComponentFixture<SelectStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectStationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
