import { Component, OnInit } from '@angular/core';
import { ToDoItemsComponent } from '../to-do-items/to-do-items.component'
import { Observable} from 'rxjs';
import { filter } from "rxjs/operators";

@Component({
  selector: 'app-count-to-do-items',
  templateUrl: './count-to-do-items.component.html',
  styleUrls: ['./count-to-do-items.component.css'],
  providers: [ToDoItemsComponent]
})
export class CountToDoItemsComponent implements OnInit {

  toDoItems: Observable<Array<any>>
  constructor(public toDoItemsComponent: ToDoItemsComponent) {
    this.toDoItems = this.toDoItemsComponent.getToDoItems();
  }



  ngOnInit(): void {
  }

}

