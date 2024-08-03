import { Routes } from '@angular/router';
import { ChallengeOneComponent } from "./components/challenge-one/challenge-one.component";
import { ChallengeTwoComponent } from "./components/challenge-two/challenge-two.component";

export const routes: Routes = [
  {
    path: 'challenge-one', component: ChallengeOneComponent
  },
  {
    path: 'challenge-two', component: ChallengeTwoComponent
  }
];
