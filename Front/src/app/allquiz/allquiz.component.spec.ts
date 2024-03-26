import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALLquizComponent } from './allquiz.component';

describe('ALLquizComponent', () => {
  let component: ALLquizComponent;
  let fixture: ComponentFixture<ALLquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ALLquizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ALLquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
