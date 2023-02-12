import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellDefaultComponent } from './shell-default.component';

describe('ShellDefaultComponent', () => {
  let component: ShellDefaultComponent;
  let fixture: ComponentFixture<ShellDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
