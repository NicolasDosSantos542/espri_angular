import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputScoreComponent } from './input-score.component';

describe('InputScoreComponent', () => {
  let component: InputScoreComponent;
  let fixture: ComponentFixture<InputScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
