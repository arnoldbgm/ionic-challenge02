import { Component } from '@angular/core';
import { CmptInterface } from '../interfaces/component.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  cmpInterface: CmptInterface[] = [
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert',
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/card',
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite',
      redirectTo: '/infinite',
    },
    {
      icon: 'refresh-circle-outline',
      name: 'Loading',
      redirectTo: '/loading',
    },
    {
      icon: 'car-outline',
      name: 'Fab',
      redirectTo: '/fab',
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirectTo: '/grid',
    },
  ];
}
