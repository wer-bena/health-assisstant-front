import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloricCalculationComponent } from './caloric-calculation.component';

describe('CaloricCalculationComponent', () => {
  let component: CaloricCalculationComponent;
  let fixture: ComponentFixture<CaloricCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaloricCalculationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloricCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
