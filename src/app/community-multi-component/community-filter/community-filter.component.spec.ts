import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityFilterComponent } from './community-filter.component';

describe('CommunityFilterComponent', () => {
  let component: CommunityFilterComponent;
  let fixture: ComponentFixture<CommunityFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunityFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
