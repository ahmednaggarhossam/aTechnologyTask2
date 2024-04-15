import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard'; // Clipboard service for copying

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent {

  constructor(private _Clipboard:Clipboard){

  }
  // Function to copy the text whose id is copy-text to the clipboard if you want to use it automatically
  copyText() {
    const textToCopy = document.getElementById('copy-text')?.textContent;
    if (textToCopy) {
      this._Clipboard.copy(textToCopy);
      alert('Text Copy To Clipboard')
    } else {
      // Handle the case where the element with ID "copy-text" is not found
    }
  }
}
