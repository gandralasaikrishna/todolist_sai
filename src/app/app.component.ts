import { Component, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title="Angual demo"
  // city="Hyderabad";

  // updatebutton(){
  //   this.city="Bangalore";
  // }


  show=false;


  movies =["RRR","bahubali","pushpa"]

  data =["hyderabad","bangalore"]

  nums=[1,2,3,4,5,6,7]
  mobiles=["redmi","realme","oppo","samsung"];
  mydetails=[
    {
    "id":1,
    "name":"sai krishna",
    "age":10,
    "roll":12345
  },

 {
    "id":2,
    "name":"krishna",
    "age":15,
    "roll":1
  }

]


num1:number=20;
num2:number=30;

op:string=''

mytitle ="angular for developers"
mysalary=120000


person1={
  "name":"sai krishna",
  "age":12,
  "salary":120000
}

date = new Date();

htmlContent = '<h1><div><p>This is <strong>some</strong> text with <em>HTML</em> tags.</p></div> </h1> </u>';

person={"Name":"Dhanu","gender":"f","nickname":"bamgaru"};

wish ="Good morning india";
email=""

updateemail(ip:string){
this.email=ip;

}

ctitle =" Header component"
myname="krishna"

data12="hello india"

updatetext(it:any){
if (it.target)
  this.data12=it.target.value;
}



cdata:any;
updatecdata(d:any){
  this.cdata=d;
}

database="hello this is from parent";
datadata=""


// view child concept

@ViewChild(HeaderComponent) child: any

getupdate(){
this.datadata=this.child.mydata;

}
updateddata1="Data you have entered is empty nothing will come if wamnt to see data enter some data and again click the buuton"
updateddata="Data will update when you click on button"

getalldata(){
if ((this.updateddata=this.datadata)==null){
   this.updateddata1;
}
else{
  this.updateddata=this.datadata
}
  
}


@ViewChild('test') d:any;

changediv(){
  // this.d.nativeElement.innerText="Hello you have clicked on click button"

  console.log(this.d.nativeElement.value);
}



@ViewChildren("h6") h:any



update(){
  console.log(this.h._results[0].nativeElement.innerHTML)
}


data3:any;
error3:any;
complete:any;



mysub = new Observable((intimate)=>{


  intimate.next("first");


  

 setTimeout(() => {
   intimate.next("second");
 
}, 500);


setTimeout(() => {
   intimate.next("thrid");
 
}, 1000);
 

setTimeout(() => {
  intimate.error("this is error");
}, 1000);

  
})


obref:any;

myinfo(){
 this.obref= this.mysub.subscribe(
    d=>{this.data3=d},
    e=>{this.error3=e},
    ()=>{console.log("completed")}
   
  )

  console.log(this.data3);


}

unsub(){
this.obref.unsubscribe();
}









}