import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, map, Observable, tap} from "rxjs";

export type Product = {
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

  cachedProducts: Product[] | null = null
  limit = 6

  constructor(
    private http: HttpClient
  ) { }

  getProducts(category: string | null): Observable<Product[]> {
    return this.http.get<Product[]>(`https://fakestoreapi.com/products`)
      .pipe(
        map(data => {
          if (category) {
            return data.filter(product => product.category === category)
          } else {
            return data
          }
        })
      )
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`)
  }

  getFeaturedProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`https://fakestoreapi.com/products`)
      .pipe(
        map(data =>
          data
            .sort((a,b) => a.rating.rate > b.rating.rate ? -1 : 1)
            .slice(0,5))
      )
  }

  getCategoriesData(): Observable<Obj> {
    return this.http.get<Product[]>(`https://fakestoreapi.com/products`)
      .pipe(
        map(data => {
          const categories: Obj = {}
          data.map(product => categories[product.category] ? categories[product.category] += 1 : categories[product.category] = 1)
          return categories
        })
      )
  }
}
