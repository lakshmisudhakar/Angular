import { Component } from '@angular/core';
import { RandomMealService } from './services/random-meal.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meal';

  mealData;
  myYoutubeUrl;
  byPassResourceUrl;
  youtubeLink;

  constructor(
    private randomMeal: RandomMealService,
    private sanitizer: DomSanitizer) {
        this.getMealData();
  }

  getMealData() {
     this.randomMeal.getRandomMeal().subscribe((data) => {
       console.log(data);
       // tslint:disable-next-line:no-string-literal
       this.mealData = data['meals'];

       this.youtubeLink = this.mealData[0].strYoutube;
       this.byPassResourceUrl = this.youtubeLink.replace('/watch?v=', '/embed/'); // replace watch to embed
       this.myYoutubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.byPassResourceUrl);

     });
  }

}
