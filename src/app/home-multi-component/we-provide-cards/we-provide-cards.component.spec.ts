import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeProvideCardsComponent } from './we-provide-cards.component';

describe('WeProvideCardsComponent', () => {
  let component: WeProvideCardsComponent;
  let fixture: ComponentFixture<WeProvideCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeProvideCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeProvideCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
