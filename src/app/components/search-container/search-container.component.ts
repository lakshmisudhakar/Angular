import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SearchMeal } from 'src/app/model/search.interface';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent  {

  searchMeal: SearchMeal[];
  itemsEmpty = false;
  inputTouched = false;
  loading = false;

  constructor(private searchService: SearchService, private sanitizer: DomSanitizer) { }

  handleSearch(inputValue: string) {
    this.loading = true;
    this.searchService.getSearchMeal(inputValue)
      .subscribe((items: any) => {
        console.log(items);
        if (items === null || items === '') {
          this.itemsEmpty = true;
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
            instruction: item.strInstructions,
            ingredient1: item.strIngredient1,
            ingredient2: item.strIngredient2,
            ingredient3: item.strIngredient3,
            ingredient4: item.strIngredient4,
            ingredient5: item.strIngredient5,
            ingredient6: item.strIngredient6,
            ingredient7: item.strIngredient7,
            ingredient8: item.strIngredient8,
            ingredient9: item.strIngredient9,
            measure1: item.strMeasure1,
            measure2: item.strMeasure2,
            measure3: item.strMeasure3,
            measure4: item.strMeasure4,
            measure5: item.strMeasure5,
            measure6: item.strMeasure6,
            measure7: item.strMeasure7,
            measure8: item.strMeasure8,
            measure9: item.strMeasure9
          };
        });
        this.inputTouched = true;
        this.loading = false;
      });
  }

}
