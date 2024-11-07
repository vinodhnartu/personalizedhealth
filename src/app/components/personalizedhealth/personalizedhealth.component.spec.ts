import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizedhealthComponent } from './personalizedhealth.component';

describe('PersonalizedhealthComponent', () => {
  let component: PersonalizedhealthComponent;
  let fixture: ComponentFixture<PersonalizedhealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalizedhealthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalizedhealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
