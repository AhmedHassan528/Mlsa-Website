import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadersLabelComponent } from './leaders-label.component';

describe('LeadersLabelComponent', () => {
  let component: LeadersLabelComponent;
  let fixture: ComponentFixture<LeadersLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadersLabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeadersLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
