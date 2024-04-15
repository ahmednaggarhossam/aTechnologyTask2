import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecieptComponent } from './components/reciept/reciept.component';
import { ReceiptCardComponent } from './components/receipt-card/receipt-card.component';
import { ReceiptHeaderComponent } from './components/receipt-header/receipt-header.component';
import { ReceiptFooterComponent } from './components/receipt-footer/receipt-footer.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { BodyComponent } from './components/body/body.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ReceiptsummaryComponent } from './components/receiptsummary/receiptsummary.component';

import { QRCodeModule } from 'angularx-qrcode';
import { QRCodeErrorCorrectionLevel } from "qrcode";
import { ProductinfoComponent } from './components/productinfo/productinfo.component'


@NgModule({
  declarations: [
    AppComponent,
    RecieptComponent,
    ReceiptCardComponent,
    ReceiptHeaderComponent,
    ReceiptFooterComponent,
    BodyComponent,
    ClientDetailsComponent,
    ReceiptsummaryComponent,
    ProductinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    QRCodeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
