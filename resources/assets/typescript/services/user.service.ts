import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { LocalStorageService } from '../local-storage/index';
import { Observable } from 'rxjs/Observable';
import { IwholeProfile } from '../models/wholeProfile';


import { IUser } from '../models/index';

@Injectable()
export class UserService {
    constructor(private http: Http, private localStorageService: LocalStorageService) { }


    getUser() : Observable<IwholeProfile>{
        return this.http.get('/api/user', this.jwt()).map((response: Response) => response.json());
    }

    create(user: IUser) {
        return this.http.post('/api/createUser', user, this.jwt()).map((response: Response) => response.json());
    }

   

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = this.localStorageService.get('currentUser');
        if (currentUser !== null) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser });
            return new RequestOptions({ headers: headers });
        }
    }
}