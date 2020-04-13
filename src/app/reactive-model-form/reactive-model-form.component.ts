import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-reactive-model-form',
  templateUrl: './reactive-model-form.component.html',
  styleUrls: ['./reactive-model-form.component.css']
})
export class ReactiveModelFormComponent implements OnInit {
  serchField: FormControl;
  searchs: string[] = [];


  constructor() { }

  ngOnInit() {
    this.serchField = new FormControl();
    //this.serchField.valueChanges      every letter is typing
    this.serchField.valueChanges.pipe(debounceTime(400), distinctUntilChanged())
    .subscribe(
      term => {
        this.searchs.push(term);
      }
    );
  }

}
