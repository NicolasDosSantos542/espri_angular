import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLongTextComponent } from './input-long-text.component';

describe('InputLongTextComponent', () => {
  let component: InputLongTextComponent;
  let fixture: ComponentFixture<InputLongTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputLongTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputLongTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
