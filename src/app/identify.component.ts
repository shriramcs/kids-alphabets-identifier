import { Component, Input } from '@angular/core';
import { MOCK } from '../MOCK';

@Component({
  selector: 'app-identify',
  template: `
    <section class="letters-wrapper">
      <div *ngFor="let letter of alphabets" class="wrapper">
        <img [src]="letter.imgSrc"class="image"/>
        <input class="control" [(ngModel)]="letter.value" (keyup)="onChangeLetter($event, letter)"/>
        
        <div *ngIf="showResult">
          {{letter.result ? '✔️' : '❎'}}
        </div>
      </div>
    </section>
    <div class="btn-group">
      <button class="btnCheck" (click)="checkInput()">
        Show results
      </button>
      <button class="btnCheck" (click)="clearInput()">
        Clear
      </button>
    </div>
  `,
  styles: [
    `
    .wrapper{
      display: flex;
      gap: 10px;
      align-items: center;
      margin-bottom: 10px;
      font-size: 50px;
    }
    .control{
      width: 50px;
      height: 50px;
      font-size: 50px;
      padding: 10px;
      color: blue;
    }
    .btnCheck{
      padding: 10px;
    }
    .btn-group{
      display: flex;
      gap: 10px;
      margin-top: 20px;
    }
    .image{
      width: 100px;
      height: 100px;
      object-fit: cover;
    }
    .letters-wrapper{
      height: 400px;
      overflow-y: auto;
    }
  `,
  ],
})
export class IdentifyComponent {
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
