import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomMealService {

public randomMealAPI = 'https://www.themealdb.com/api/json/v1/1/random.php';
public SearchMealAPI = 'https://www.themealdb.com/api/json/v1/1/search.php?s=ratatouille';

  constructor(private http: HttpClient) { }

   getRandomMeal() {
     return this.http.get(this.randomMealAPI);
   }

}
