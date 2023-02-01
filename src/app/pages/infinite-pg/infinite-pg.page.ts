import { Component } from '@angular/core';

@Component({
  selector: 'app-infinite-pg',
  templateUrl: './infinite-pg.page.html',
  styleUrls: ['./infinite-pg.page.scss'],
})
export class InfinitePgPage {
  user: any[] = Array(20);

  constructor() {}

  loadData(event: any) {
    setTimeout(() => {
      if (this.user.length == 50) {
        event.target.disabled = true;
        return;
      }
      console.log('Done');
      let users_2: any[] = Array(10);
      this.user.push(...users_2);
      // controla
      event.target.complete();
    }, 500);
  }
}
