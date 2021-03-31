import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaximComponent } from './maxim.component';

describe('MaximComponent', () => {
  let component: MaximComponent;
  let fixture: ComponentFixture<MaximComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaximComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaximComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
