import { Component } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  IconDefinition,
  IconName,
  fas,
} from '@fortawesome/free-solid-svg-icons';
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss'],
})
export class MyComponentComponent {
  icons: Array<string>;
  length: number;
  isIcon = false;
  myIcon!: IconDefinition;

  constructor() {
    library.add(fas);
    this.icons = Object.keys(
      Object.values(Object.values(library)[0])[0] as Object
    );
    this.length = this.icons.length;
  }

  randomNumber(min: number, max: number) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  buttonClickHandler() {
    setTimeout(() => {
      this.isIcon = true;
      let iconNumber = this.randomNumber(0, this.length - 1);
      this.myIcon = findIconDefinition({
        prefix: 'fas',
        iconName: this.icons[iconNumber] as IconName,
      });
    }, 3000);
  }
}
