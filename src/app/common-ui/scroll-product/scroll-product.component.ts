import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-scroll-product',
  standalone: false,
  templateUrl: './scroll-product.component.html',
  styleUrls: ['./scroll-product.component.css']
})
export class ScrollProductComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  totalSlides = 3;
  autoSlideInterval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updateSlide();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.updateSlide();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.updateSlide();
  }

  updateSlide() {
    const container = document.querySelector('.product-container') as HTMLElement;
    const width = container.offsetWidth;
    container.style.transform = `translateX(-${this.currentSlide * width}px)`;

    const products = document.querySelectorAll('.product');
    products.forEach((product, index) => {
      (product as HTMLElement).style.opacity = index === this.currentSlide ? '1' : '0.3';
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
