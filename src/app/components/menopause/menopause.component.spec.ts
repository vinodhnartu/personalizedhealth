import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenopauseComponent } from './menopause.component';

describe('MenopauseComponent', () => {
  let component: MenopauseComponent;
  let fixture: ComponentFixture<MenopauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenopauseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenopauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
