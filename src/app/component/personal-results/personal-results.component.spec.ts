import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalResultsComponent } from './personal-results.component';

describe('PersonalResultsComponent', () => {
  let component: PersonalResultsComponent;
  let fixture: ComponentFixture<PersonalResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
