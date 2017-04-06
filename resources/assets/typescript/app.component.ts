import { Component} from '@angular/core';
import { LocalStorageService } from './local-storage/index';




@Component({
    selector: 'app',
    template: `
    <main >
       <navigation></navigation>
       <section style="flex:1;" class="section">
        <div class="container">
        <router-outlet></router-outlet>
        </div>
       </section>
       <div> Current user: {{localStorageService.get('currentUser')}}</div>
    </main>`

})

export class AppComponent { 
constructor (private localStorageService: LocalStorageService){
    }
}