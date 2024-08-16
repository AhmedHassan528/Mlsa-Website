import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRegistFormComponent } from './event-regist-form.component';

describe('EventRegistFormComponent', () => {
  let component: EventRegistFormComponent;
  let fixture: ComponentFixture<EventRegistFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventRegistFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventRegistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
