import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtoutsDefautsComponent } from './atouts-defauts.component';

describe('AtoutsDefautsComponent', () => {
  let component: AtoutsDefautsComponent;
  let fixture: ComponentFixture<AtoutsDefautsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtoutsDefautsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtoutsDefautsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
