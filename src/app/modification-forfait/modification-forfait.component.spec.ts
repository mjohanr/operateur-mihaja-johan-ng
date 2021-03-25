import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationForfaitComponent } from './modification-forfait.component';

describe('ModificationForfaitComponent', () => {
  let component: ModificationForfaitComponent;
  let fixture: ComponentFixture<ModificationForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationForfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
