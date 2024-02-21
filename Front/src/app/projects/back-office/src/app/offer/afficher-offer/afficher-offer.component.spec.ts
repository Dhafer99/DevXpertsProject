import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherOfferComponent } from './afficher-offer.component';

describe('AfficherOfferComponent', () => {
  let component: AfficherOfferComponent;
  let fixture: ComponentFixture<AfficherOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
