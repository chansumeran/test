import { Component, inject } from '@angular/core';
import { NgClass } from "@angular/common";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-challenge-one',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './challenge-one.component.html',
  styleUrl: './challenge-one.component.css'
})
export class ChallengeOneComponent {
  authService = inject(AuthService);

  ngOnInit(): void {}

  numbers : { value: number }[] = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: 10 }
  ];

  isClicked : boolean = false;

  toggleColor() {
    this.isClicked = !this.isClicked;
  }

  isEven(number : number) {
    return number % 2 === 0;
  }
}
