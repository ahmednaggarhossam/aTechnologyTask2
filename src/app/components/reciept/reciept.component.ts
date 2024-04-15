import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ReceiptCardComponent } from '../receipt-card/receipt-card.component';
@Component({
  selector: 'app-reciept',
  templateUrl: './reciept.component.html',
  styleUrls: ['./reciept.component.css']
})
export class RecieptComponent {
  constructor(private dialogRef:MatDialog){}
  openDialog(){
    this.dialogRef.open(ReceiptCardComponent);
  }
}
