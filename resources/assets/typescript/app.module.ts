///<reference path="../../../typings/index.d.ts"/>
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';
import { BaseRequestOptions } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { WelcomeComponent, NavigationComponent, ToDoListComponent, LogInComponent } from './index';




import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';




@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing

        
        
    ],
    declarations: [
        AppComponent,
        WelcomeComponent,
        NavigationComponent,
        ToDoListComponent,
        LogInComponent

       
        
        
    ],
    providers: [
        {provide: APP_BASE_HREF, useValue : '/' }
        
    ],
    
    bootstrap: [AppComponent]
})
export class AppModule { }