import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
@Injectable() //pour injecté un service dans un autre service
export class AuthGuard implements CanActivate{

    constructor(private authService:AuthService,private router:Router){}
    
    canActivate(): boolean   {
        if(this.authService.isAuth){
            return true;
        }
        else{
            this.router.navigate(['/Auth']);
            return false;
        }
  
        
    }
}