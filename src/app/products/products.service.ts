import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  limit = 20

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get(`https://fakestoreapi.com/products?limit=${this.limit}`)
      .pipe(
        tap(data => console.log(data))
      )
  }

  getFeaturedProducts() {
    return this.http.get(`https://fakestoreapi.com/products?limit=5`)
      .pipe(
        tap(data => console.log(data))
      )
  }
}
