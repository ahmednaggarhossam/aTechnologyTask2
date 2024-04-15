import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptHeaderComponent } from './receipt-header.component';

describe('ReceiptHeaderComponent', () => {
  let component: ReceiptHeaderComponent;
  let fixture: ComponentFixture<ReceiptHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiptHeaderComponent]
    });
    fixture = TestBed.createComponent(ReceiptHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
