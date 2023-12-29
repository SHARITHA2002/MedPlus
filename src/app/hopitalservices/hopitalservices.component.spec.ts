import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopitalservicesComponent } from './hopitalservices.component';

describe('HopitalservicesComponent', () => {
  let component: HopitalservicesComponent;
  let fixture: ComponentFixture<HopitalservicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HopitalservicesComponent]
    });
    fixture = TestBed.createComponent(HopitalservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
