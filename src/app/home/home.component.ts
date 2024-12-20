import { Component,OnInit } from '@angular/core';
import { TestService } from '../test.service';

import { HttpClientModule,HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

data:any;

  constructor(private ts:TestService,
    private https:HttpClient
   
  ){}


  

  ngOnInit(): void{
    // this.data=this.ts.mobiles;
     this.https.get("https://fakestoreapi.com/products?limit=5").subscribe((data)=>{
      this.data=data;
      console.log(data)
    })
    

  }


  getdata(){

    this.https.get("https://fakestoreapi.com/products?limit=5").subscribe((data)=>{
      this.data=data;
      console.log(data)
    })
  }
 
  


  
}
