import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject(HttpClient)

  getProducts(){
    return this.http.get('http://localhost:5040/api/v1/products?pageNumber=1&pageSize=10')
  }
}
