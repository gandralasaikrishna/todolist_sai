import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RemoveHtmlTagsPipe, TestPipe } from './test.pipe';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule, Routes } from '@angular/router';
import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { TodoformComponent } from './todoform/todoform.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoService } from './todo.service';



const routes:Routes=[
  {
  path:'about',component:AboutComponent
  },
  {
  path:"Home",component:HomeComponent
  },
  {
    path:"header",component:HeaderComponent
  },
  {
path:"login",component:LoginComponent
  },
   {
    path:'contact',component:ContactComponent,canActivate:[AuthService]
    },
  {
    path:"**",component:HomeComponent
  }
 
]



@NgModule({
  declarations: [
    AppComponent,
    TestPipe,
    RemoveHtmlTagsPipe,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    NotfoundComponent,
    LoginComponent,
    TodoformComponent,
    TodolistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule

    
    
    
    

  ],
  providers: [TestService,AuthService,TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
