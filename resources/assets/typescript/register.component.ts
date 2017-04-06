import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService, AuthenticationService } from './services/index'; 
import { Router } from '@angular/router';

@Component({
    selector: 'log-in',
    templateUrl: './app/html/register.html'

})

export class RegisterComponent { 
    user: FormGroup;
    model: any = {};
    throwError : boolean = false;
    constructor (private userService: UserService, private router: Router, private authService: AuthenticationService){}

    ngOnInit() {
        this.user = new FormGroup({
            name: new FormControl('',  [Validators.required, Validators.minLength(4)]),
            email: new FormControl('',  [Validators.required, Validators.minLength(5)]),
            password: new FormControl('',  [Validators.required, Validators.minLength(5)]),
  });
}

  onSubmit() {
     this.throwError = false;
     this.userService.create(this.model)
       .subscribe(
           data => {
               if (data.success) {
                    this.router.navigate(['welcome']);
               } else {
                   this.throwError = true;
              }
           },
           error => {
               this.throwError = true;
           }
       )
  }
}