import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, map, Observable, tap} from "rxjs";

type Product = {
  id: number,
  title: string,
  description: string,
  category: string,
  image: string,
  rating: any,
  price: number
}

type Obj = {
  [key: string]: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  limit = 6

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<any> {
    return this.http.get<Product[]>(`https://fakestoreapi.com/products`)
      .pipe(
        tap(data => console.log(data))
      )
  }

  getProductById(id: string): Observable<any> {
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
      .pipe(
        tap(data => console.log(data))
      )
  }

  getFeaturedProducts() {
    return this.http.get<Product[]>(`https://fakestoreapi.com/products`)
      .pipe(
        map(data =>
          data
            .sort((a,b) => a.rating.rate > b.rating.rate ? -1 : 1)
            .slice(0,5))
      )
  }
  getCategoriesData() {
    return this.http.get<Product[]>(`https://fakestoreapi.com/products`)
      .pipe(
        map(data => {
          const categories: Obj = {}
          data.map(product => categories[product.category] ? categories[product.category] += 1 : categories[product.category] = 1)
          return {
            labels: Object.keys(categories),
            data: Object.values(categories)
          }
        })
      )
  }
}
