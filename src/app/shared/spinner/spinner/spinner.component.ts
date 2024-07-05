import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  template:
    `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {}
