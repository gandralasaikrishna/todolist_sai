import { Component, EventEmitter, input, Input, Output, viewChild } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // @Input() childtitle: any
  // @Input() name:any;




  // child to parents 
message="pass to parent"
  @Output() customeve = new EventEmitter();

  passtoparent(){
   this.customeve.emit(this.message);
  }
  
updatemessage(ip:any){
  this.message=ip.target.value;
}
  

mydata="This is c"
mydatadata="this input"

updatesdata(ip:any){
  this.mydata=ip.target.value;
}

}
