import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeOneComponent } from './challenge-one.component';

describe('ChallengeOneComponent', () => {
  let component: ChallengeOneComponent;
  let fixture: ComponentFixture<ChallengeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChallengeOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
