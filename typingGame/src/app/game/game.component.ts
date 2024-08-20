import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  randomText = lorem.sentence();
  inputText = "";
  inputTextSplit = "";
  textColors: number[] = [];
  isSuccesful = 0;

  onInput(event: any) {
    this.inputText = event.target.value;
    this.inputTextSplit = this.getSplit(this.inputText);
  }

  getSplit(string: any) {
    return string.split("");
  }

  compareText(randomLetter: string, enteredText: string) {
    if(!enteredText) {
      return 'pending';
    }

    return enteredText === randomLetter ? 'correct' : 'incorrect';
  }
}
