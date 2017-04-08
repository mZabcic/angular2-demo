import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent, ProfileComponent, LogInComponent, RegisterComponent, AuthGuard } from './index';


const appRoutes: Routes = [

     
 { path: 'welcome', component: WelcomeComponent},
 { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
 { path: 'login', component: LogInComponent},
 { path: 'register', component: RegisterComponent}


     


    // otherwise redirect to home
,{ path: '**', redirectTo: 'welcome' }
];

export const routing = RouterModule.forRoot(appRoutes);