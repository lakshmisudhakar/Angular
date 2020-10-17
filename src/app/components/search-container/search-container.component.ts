import { Component, OnInit } from '@angular/core';
import { SearchMeal } from 'src/app/model/search.interface';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent  {

  inputTouched = false;
  loading = false;
  searchMeal: SearchMeal[] = [];

  loadData = false;
  ingArray = [];
  error = false;
  constructor(private searchService: SearchService) { }

  handleSearch(inputValue: string) {
    this.loading = true;
    this.loadData = false;
    this.searchService.getSearchMeal(inputValue)
      .subscribe((items: any) => {
        console.log(items);

        if (items == null) {
          this.error = true;
          this.loading = false;
          this.inputTouched = false;
          return;
        }
        this.searchMeal = items.map(item => {
          return {
            videoId: item.idMeal,
            imageThumb: item.strMealThumb,
            title: item.strMeal,
            category: item.strCategory,
            videoUrl: item.strYoutube,
            description: item.strInstructions,
            ingredient: item.strIngredient
          };
        });
        this.inputTouched = true;
        this.loading = false;
      });
  }

}
