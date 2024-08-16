import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubFilterComponent } from './club-filter.component';

describe('ClubFilterComponent', () => {
  let component: ClubFilterComponent;
  let fixture: ComponentFixture<ClubFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClubFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
