import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptFooterComponent } from './receipt-footer.component';

describe('ReceiptFooterComponent', () => {
  let component: ReceiptFooterComponent;
  let fixture: ComponentFixture<ReceiptFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiptFooterComponent]
    });
    fixture = TestBed.createComponent(ReceiptFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
