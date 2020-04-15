import { ApiservcieService } from './apiservcie.service';
import { Person } from './person';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-jsonserver',
  templateUrl: './header-jsonserver.component.html',
  styleUrls: ['./header-jsonserver.component.css']
})
export class HeaderJsonserverComponent implements OnInit {
  people: Person[];
  person = new Person();

  constructor(private apiService:ApiservcieService){ }

  ngOnInit() {
    this.refreshPeople()
  }


  refreshPeople() {
    this.apiService.getPeople()
      .subscribe(data => {
        this.people=data;
      })

  }

  addPerson() {
    this.apiService.addPerson(this.person)
      .subscribe(data => {
          this.person = new Person();
        this.refreshPeople();
      })
  }


}
