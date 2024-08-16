import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLabelComponent } from './event-label.component';

describe('EventLabelComponent', () => {
  let component: EventLabelComponent;
  let fixture: ComponentFixture<EventLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventLabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
