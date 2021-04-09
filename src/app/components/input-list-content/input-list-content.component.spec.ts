import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputListContentComponent } from './input-list-content.component';

describe('InputListContentComponent', () => {
  let component: InputListContentComponent;
  let fixture: ComponentFixture<InputListContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputListContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
