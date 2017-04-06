import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { LoginUser } from '../models/index';
import { LocalStorageService } from '../local-storage/index';

//http://jasonwatmore.com/post/2016/08/16/angular-2-jwt-authentication-example-tutorial#authentication-service-ts
@Injectable()
export class AuthenticationService {
    public token: string;
    _user : LoginUser;

    constructor(private Http: Http, private localStorageService: LocalStorageService) {
        // set token if saved in local storage
        //let currentUser= this.localStorageService.get('currentUser');
        //console.log(currentUser);
        //this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        this._user = new LoginUser(username, password);
       return this.Http.post('/api/login', this._user)
            .map((response: Response) => {
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;
                 
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    this.localStorageService.set('currentUser', JSON.stringify({ username: username, token: token }));
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }


     forceLogin(username: string, token: string){
       this.token = token;
       this.localStorageService.set('currentUser', JSON.stringify({ username: username, token: token }));
                    
      
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
         this.localStorageService.remove('currentUser');
    }


}