import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';

  updateTitle(value: string)
  {
    this.title = value;
  }
}
