import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierFrontComponent } from './supplier-front.component';

describe('SupplierFrontComponent', () => {
  let component: SupplierFrontComponent;
  let fixture: ComponentFixture<SupplierFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
