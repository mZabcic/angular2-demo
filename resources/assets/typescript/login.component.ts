import { Component} from '@angular/core';
import { AuthenticationService } from './services/index'; 
import { Router } from '@angular/router';

@Component({
    selector: 'log-in',
    templateUrl: './app/html/login.html'

})

export class LogInComponent { 
    model: any = {};
    error: boolean = false;
    constructor (private authService: AuthenticationService, private router: Router){
     }

     login() {
         this.error = false;
         this.authService.login(this.model.email, this.model.password)
         .subscribe(result => {
             if (result === true) {
                 this.router.navigate(['welcome']);
                 console.log('True');
             } else {
                    this.error = true;
             }
         })
     }
}