import { Component } from '@angular/core';
import { HomeConstants } from './constants/home.constant';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  HomeConstants = HomeConstants;
  constructor() {}
}
