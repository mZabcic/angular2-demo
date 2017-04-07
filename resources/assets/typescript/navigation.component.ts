import { Component} from '@angular/core';
import { AuthenticationService } from './services/index'; 
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage/index';

@Component({
    selector: 'navigation',
    templateUrl: './app/html/navigation.html'

})

export class NavigationComponent { 
    constructor (private authService: AuthenticationService, private router: Router,  private localStorageService: LocalStorageService){
        
         
      }

      logout() : void {
          this.authService.logout();
          this.router.navigate(['welcome']);
      }
}