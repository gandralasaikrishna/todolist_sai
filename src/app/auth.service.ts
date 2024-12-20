import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot,Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthService  implements CanActivate{

  constructor(private r:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

let loggin=false;

if (loggin){
  return true;
}
else{
this.r.navigate(['/login']);

  return false;
}
    
    
  }

 

  
}
