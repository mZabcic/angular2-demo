import { Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';




@Component({
    selector: 'app',
    template: `<h1 class="title is-1"> {{ currentTime | async | date:'hh : mm : ss' }} </h1>`

})

export class WelcomeComponent { 

 currentTime: any;

  constructor (){
    this.currentTime = Observable.interval(1000).map(x => new Date()).share();
    }

    
  
  
}