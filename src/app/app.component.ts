import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shopping';
  age = 15;

  testRandom() {
    console.log('testRandom', this.title);
  }
  changeActivity(age: number) {
    this.age = age;
  }
  changeAge(age: number) {
    this.title = age.toString();
  }
}
