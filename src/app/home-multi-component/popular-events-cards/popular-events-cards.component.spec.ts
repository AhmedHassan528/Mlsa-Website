import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularEventsCardsComponent } from './popular-events-cards.component';

describe('PopularEventsCardsComponent', () => {
  let component: PopularEventsCardsComponent;
  let fixture: ComponentFixture<PopularEventsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularEventsCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularEventsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
