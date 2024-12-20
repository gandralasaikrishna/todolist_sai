import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {

  getdata:any

  constructor(public ts:TodoService){

  }

  ngOnInit(): void {
    this.getdata=this.ts.todoList;
  }

deletetasks(i:any){
  this.ts.deletetodolist(i);
}


}
