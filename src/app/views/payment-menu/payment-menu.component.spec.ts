import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMenuComponent } from './payment-menu.component';

describe('PaymentMenuComponent', () => {
  let component: PaymentMenuComponent;
  let fixture: ComponentFixture<PaymentMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
