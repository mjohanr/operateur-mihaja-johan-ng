import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotNonValideComponent } from './depot-non-valide.component';

describe('DepotNonValideComponent', () => {
  let component: DepotNonValideComponent;
  let fixture: ComponentFixture<DepotNonValideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotNonValideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotNonValideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
