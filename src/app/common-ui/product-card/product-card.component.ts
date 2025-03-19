import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

interface Product {
  name: string;
  price: string;
  imageUrl: string;
}

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit, OnDestroy {
  products: Product[] = [
    {name: 'Название товара 1', price: '14 499,99 ₽', imageUrl: '/banana.png'},
  ];

  ngOnInit(): void {
    console.log('ProductCardComponent инициализирован');
  }

  ngOnDestroy(): void {
    console.log('ProductCardComponent уничтожен');
  }
}
