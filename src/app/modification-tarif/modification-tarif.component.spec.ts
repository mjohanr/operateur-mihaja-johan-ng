import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationTarifComponent } from './modification-tarif.component';

describe('ModificationTarifComponent', () => {
  let component: ModificationTarifComponent;
  let fixture: ComponentFixture<ModificationTarifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationTarifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationTarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
