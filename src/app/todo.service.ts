import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

idcount=3;


  todoList=[
    {
     id:1,"task":"task1"
    },
    
    {
      id:2,"task":"task2"
    }
  ]


  addtodotask(addtaskname: any){
this.todoList.push({"id": this.idcount++,"task":addtaskname});
  }

  deletetodolist(index:any){
  this.todoList.splice(index,1)
  }
  
}
