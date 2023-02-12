import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavesViewComponent } from './waves-view.component';

describe('WavesViewComponent', () => {
  let component: WavesViewComponent;
  let fixture: ComponentFixture<WavesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WavesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WavesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
