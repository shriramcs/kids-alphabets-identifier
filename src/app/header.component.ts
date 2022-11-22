import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <h1>
        Identify letters 😊
      </h1>
    </header>
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class HeaderComponent {}
