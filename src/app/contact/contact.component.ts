import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  data:any;

  constructor(private ts:TestService){

  }


  ngOnInit(){
    
   this.data= this.ts.mobiles;

  }

  ondatachange(){
    this.data.push("Vivo")
    
    
  }
}
