import { Component } from '@angular/core';
import { MOCK } from 'src/MOCK';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss']
})
export class LettersComponent {
  result: boolean = false;
  showResult: boolean = false;

  alphabets: any = MOCK;

  onChangeLetter(event: any, item: any): void {
    item.value = item.value.charAt(item.value.length - 1);
  }
  checkInput() {
    this.showResult = true;
    this.alphabets.forEach((item: any) => {
      item.result = (item.value || '').toLowerCase() === item.name;
    });
  }
  clearInput() {
    this.showResult = false;
    this.alphabets.forEach((item: any) => {
      item.result = null;
      item.value = '';
    });
  }
}
