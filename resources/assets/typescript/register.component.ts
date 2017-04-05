import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'log-in',
    templateUrl: './app/html/register.html'

})

export class RegisterComponent { 
    user: FormGroup;
    model: any = {};
    constructor (){}

    ngOnInit() {
        this.user = new FormGroup({
            name: new FormControl('',  [Validators.required, Validators.minLength(4)]),
            email: new FormControl('',  [Validators.required, Validators.minLength(5)]),
            password: new FormControl('',  [Validators.required, Validators.minLength(5)]),
  });
}

  onSubmit() {
     
  }
}