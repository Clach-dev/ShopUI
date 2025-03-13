import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchQuery: string = '';
  hidePlaceholder: boolean = false;
  isCatalogOpen: boolean = false;
  showCategories: boolean = false; // Добавлено свойство

  toggleCatalog() {
    this.isCatalogOpen = !this.isCatalogOpen;
  }

  toggleCategories() {
    this.showCategories = !this.showCategories; // Добавлена логика для открытия категорий
  }

  selectCategory(category: string) {
    console.log(`Выбрана категория: ${category}`);
    this.showCategories = false;
  }
}
