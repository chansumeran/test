import { Component, inject } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-challenge-three',
  standalone: true,
  imports: [],
  templateUrl: './challenge-three.component.html',
  styleUrl: './challenge-three.component.css'
})
export class ChallengeThreeComponent {
  authService = inject(AuthService);
}
