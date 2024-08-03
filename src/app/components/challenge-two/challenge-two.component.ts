import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-challenge-two',
  standalone: true,
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './challenge-two.component.html',
  styleUrl: './challenge-two.component.css'
})
export class ChallengeTwoComponent {

  inputText!: string;
  generatedMumble: string = '';
  isSuccess: boolean = false;

  generateMumble() : void {
    let mumble = '';
    this.isSuccess = true;

    for (let i = 0; i < this.inputText.length; i++) {
      // if the current character is a number.
      if (!isNaN(Number(this.inputText[i]))) {
        mumble = "Invalid. It contains a number";
        this.isSuccess = false;
        break;
      }

      // if the current character is a special character
      if (!/[a-zA-Z0-9]/.test(this.inputText[i])) {
        mumble = "Invalid. It contains special characters";
        this.isSuccess = false;
        break;
      }

      // concatenate to mumble
      mumble += this.inputText[i].toUpperCase();

      for (let j = 0; j < i; j++) {
        mumble += this.inputText[i].toLowerCase()
      }

      // check if we are at the end of the line
      if (i !== this.inputText.length - 1) {
        mumble += '-'
      }
    }

    this.generatedMumble = mumble;
  }

  clearInput() : void {
    this.inputText = '';
    this.generatedMumble = '';
  }

}
