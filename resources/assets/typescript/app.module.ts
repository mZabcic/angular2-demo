///<reference path="../../../typings/index.d.ts"/>
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';
import { BaseRequestOptions } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { WelcomeComponent, NavigationComponent, ToDoListComponent, LogInComponent, RegisterComponent } from './index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';




@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        ReactiveFormsModule

        
        
    ],
    declarations: [
        AppComponent,
        WelcomeComponent,
        NavigationComponent,
        ToDoListComponent,
        LogInComponent,
        RegisterComponent
    ],
    providers: [
        {provide: APP_BASE_HREF, useValue : '/' }
        
    ],
    
    bootstrap: [AppComponent]
})
export class AppModule { }