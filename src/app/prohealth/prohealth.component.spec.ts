import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProhealthComponent } from './prohealth.component';

describe('ProhealthComponent', () => {
  let component: ProhealthComponent;
  let fixture: ComponentFixture<ProhealthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProhealthComponent]
    });
    fixture = TestBed.createComponent(ProhealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
