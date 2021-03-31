import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleEtTalentComponent } from './role-et-talent.component';

describe('RoleEtTalentComponent', () => {
  let component: RoleEtTalentComponent;
  let fixture: ComponentFixture<RoleEtTalentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleEtTalentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleEtTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
