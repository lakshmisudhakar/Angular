import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  private randomMealAPI = 'https://www.themealdb.com/api/json/v1/1/random.php';
  private searchMealURL = 'https://www.themealdb.com/api/json/v1/1/search.php';


  getRandomMeal(): Observable<any> {
    return this.http.get(this.randomMealAPI)
    .pipe(
      map((response: any) => response.meals)
    );
  }

  getSearchMeal(query: string): Observable <any> {
    const url = `${this.searchMealURL}?s=${query}`;
    return this.http.get(url)
      .pipe(
        map((response: any) => response.meals)
      );
  }
}
