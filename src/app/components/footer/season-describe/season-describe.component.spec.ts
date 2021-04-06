import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonDescribeComponent } from './season-describe.component';

describe('seasonDescribeComponent', () => {
  let component: SeasonDescribeComponent;
  let fixture: ComponentFixture<SeasonDescribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonDescribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonDescribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
