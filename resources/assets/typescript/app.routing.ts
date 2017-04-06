import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent, ProfileComponent, LogInComponent, RegisterComponent} from './index';


const appRoutes: Routes = [

     
 { path: 'welcome', component: WelcomeComponent},
 { path: 'profile', component: ProfileComponent},
 { path: 'login', component: LogInComponent},
 { path: 'register', component: RegisterComponent}


     


    // otherwise redirect to home
,{ path: '**', redirectTo: 'welcome' }
];

export const routing = RouterModule.forRoot(appRoutes);