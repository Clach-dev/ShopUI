import { Component, OnInit, OnDestroy } from '@angular/core';

export interface Category {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

@Component({
  selector: 'app-scroll-category',
  standalone: false,
  templateUrl: './scroll-category.component.html',
  styleUrl: './scroll-category.component.css'
})
export class ScrollCategoryComponent implements OnInit, OnDestroy {
  categories: Category[] = [
    {
      title: 'Масла',
      description: 'Трансмиссионное масло, присадка в масло акпп',
      imageUrl: '/banana.png',
      link: '/categories/oil'
    },
    {
      title: 'Фильтры',
      description: 'Масляный фильтр, фильтр воздушный',
      imageUrl: '/banana.png',
      link: '/categories/filters'
    },
    {
      title: 'Радиаторы',
      description: 'Дополнительные радиаторы',
      imageUrl: '/banana.png',
      link: '/categories/radiators'
    },
    {
      title: 'Свечи',
      description: 'Свечи зажигания и накаливания',
      imageUrl: '/banana.png',
      link: '/categories/spark-plug'
    },
    {
      title: 'Тормоза',
      description: 'Диски и колодки',
      imageUrl: '/banana.png',
      link: '/categories/brake'
    }
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startAutoScroll() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 4000);
  }

  getVisibleCategories(): Category[] {
    const visibleCategories: Category[] = [];
    for (let i = 0; i < 3; i++) {
      // Берём элементы по кругу
      const index = (this.currentIndex + i) % this.categories.length;
      visibleCategories.push(this.categories[index]);
    }
    return visibleCategories;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.categories.length) % this.categories.length;
  }

  next() {
    this.currentIndex =
      (this.currentIndex + 1) % this.categories.length;
  }
}
