import {Routes} from '@angular/router'
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';




export const routes: Routes = [
    {path:"signup",component:AuthSignupComponent},
    {path:"login", component:AuthLoginComponent}
]



