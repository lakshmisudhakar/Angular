import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SearchMeal } from 'src/app/model/search.interface';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  randomMealData: SearchMeal[];

  constructor(private searchService: SearchService, private sanitizer: DomSanitizer) {
    this.getMealData();
  }

  ngOnInit(): void {
  }

  getMealData() {
    this.searchService.getRandomMeal().subscribe((data) => {
      console.log(data);
      this.randomMealData = data;
    });
 }

}
