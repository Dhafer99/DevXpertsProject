import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnequizComponent } from './onequiz.component';

describe('OnequizComponent', () => {
  let component: OnequizComponent;
  let fixture: ComponentFixture<OnequizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnequizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
