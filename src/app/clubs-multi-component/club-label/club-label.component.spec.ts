import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubLabelComponent } from './club-label.component';

describe('ClubLabelComponent', () => {
  let component: ClubLabelComponent;
  let fixture: ComponentFixture<ClubLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubLabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClubLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
