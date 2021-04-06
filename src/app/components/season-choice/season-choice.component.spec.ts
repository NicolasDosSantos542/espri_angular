import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonChoiceComponent } from './season-choice.component';

describe('SeasonChoiceComponent', () => {
  let component: SeasonChoiceComponent;
  let fixture: ComponentFixture<SeasonChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
