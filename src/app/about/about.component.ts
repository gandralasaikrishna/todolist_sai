import { Component,OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  data:any;

constructor(private ts:TestService){
this.data=this.ts.mobiles;

}

ngOnInit(){

}

}
