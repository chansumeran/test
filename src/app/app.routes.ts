import { Routes } from '@angular/router';
import { ChallengeOneComponent } from "./components/challenge-one/challenge-one.component";
import { ChallengeTwoComponent } from "./components/challenge-two/challenge-two.component";
import { HomeComponent } from "./components/home/home.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";

export const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'challenge-one', component: ChallengeOneComponent
  },
  {
    path: 'challenge-two', component: ChallengeTwoComponent
  }
];
