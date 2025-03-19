import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

interface Product {
  name: string;
  price: string;
  imageUrl: string;
}

@Component({
  selector: 'app-scroll-product',
  standalone: false,
  templateUrl: './scroll-product.component.html',
  styleUrls: ['./scroll-product.component.css']
})
export class ScrollProductComponent implements OnInit, OnDestroy {
  products: Product[] = [
    { name: 'Название товара 1', price: '14 499,99 ₽', imageUrl: '/banana.png' },
    { name: 'Название товара 2', price: '12 999,99 ₽', imageUrl: '/banana.png' },
    { name: 'Название товара 3', price: '15 999,99 ₽', imageUrl: '/banana.png' },
  ];

  currentSlide = 0;
  autoSlideInterval: any;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.products.length;
    this.updateSlide();
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.products.length) % this.products.length;
    this.updateSlide();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.updateSlide();
  }

  updateSlide() {
    const container = document.querySelector('.product-container') as HTMLElement;
    const width = container.offsetWidth;
    this.renderer.setStyle(container, 'transform', `translateX(-${this.currentSlide * width}px)`);

    const products = document.querySelectorAll('.product');
    products.forEach((product, index) => {
      this.renderer.setStyle(
        product,
        'opacity',
        index === this.currentSlide ? '1' : '0.3'
      );
    });
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }

  handleMouseEnter() {
    this.stopAutoSlide();
  }

  handleMouseLeave() {
    this.startAutoSlide();
  }
}
