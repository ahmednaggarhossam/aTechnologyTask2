import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptsummaryComponent } from './receiptsummary.component';

describe('ReceiptsummaryComponent', () => {
  let component: ReceiptsummaryComponent;
  let fixture: ComponentFixture<ReceiptsummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiptsummaryComponent]
    });
    fixture = TestBed.createComponent(ReceiptsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
