import { Component} from '@angular/core';





@Component({
    selector: 'app',
    template: `
    <main >
       <navigation></navigation>
       <section class="section">
        <div class="container">
        <router-outlet></router-outlet>
        </div>
       </section>
    </main>`

})

export class AppComponent { 
constructor (){
    }
}