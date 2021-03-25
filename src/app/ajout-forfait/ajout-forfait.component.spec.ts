import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutForfaitComponent } from './ajout-forfait.component';

describe('AjoutForfaitComponent', () => {
  let component: AjoutForfaitComponent;
  let fixture: ComponentFixture<AjoutForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutForfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
