import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-buy-button',
  template: `
    <button class="buy-button">{{ label }}</button>`,
  standalone: false,
  styleUrls: ['./buy-button.component.css']
})
export class BuyButtonComponent {
  @Input() label: string = 'Купить';
}
