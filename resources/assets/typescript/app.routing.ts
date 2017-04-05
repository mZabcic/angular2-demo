import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent, ToDoListComponent, LogInComponent, RegisterComponent} from './index';


const appRoutes: Routes = [

     
 { path: 'welcome', component: WelcomeComponent},
 { path: 'to-do', component: ToDoListComponent},
 { path: 'login', component: LogInComponent},
 { path: 'register', component: RegisterComponent}


     


    // otherwise redirect to home
,{ path: '**', redirectTo: 'welcome' }
];

export const routing = RouterModule.forRoot(appRoutes);