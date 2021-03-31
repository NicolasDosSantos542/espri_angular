import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagieEtMaterielComponent } from './magie-et-materiel.component';

describe('MagieEtMaterielComponent', () => {
  let component: MagieEtMaterielComponent;
  let fixture: ComponentFixture<MagieEtMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagieEtMaterielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagieEtMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
