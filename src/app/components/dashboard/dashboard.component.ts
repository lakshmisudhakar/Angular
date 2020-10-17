import { Component, OnInit } from '@angular/core';
import { SearchMeal } from 'src/app/model/search.interface';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  mealData: SearchMeal[];
  loadData = false;

  constructor(private randomMealService: SearchService) {
    this.getMealData();
  }

  ngOnInit(): void {
  }

  getMealData() {
    this.loadData = true;
    this.randomMealService.getRandomMeal().subscribe((data) => {
      console.log(data);
      this.mealData = data;
    });
 }

}
