import { Component} from '@angular/core';
import { UserService } from './services/index'; 

import { IwholeProfile } from './models/wholeProfile';



@Component({
    selector: 'app',
    template: `
    <div *ngIf="show" class="container">
    <p> Ime: {{profile.user.name}} </p>
    <p> Email: {{profile.user.email}} </p>
    <p> Account kreiran: {{profile.user.created_at}} </p>
    </div>
    `

})

export class ProfileComponent { 

  profile : IwholeProfile;
  show : boolean = false;

  constructor (private userService: UserService){
      this.userService.getUser().subscribe( result => {
          this.profile = result;
      })
  }

   ngDoCheck() {
     if (this.profile !== undefined) {
           this.show = true;
     }
   }

    
  
  
}