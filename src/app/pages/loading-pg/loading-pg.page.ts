import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-loading-pg',
  templateUrl: './loading-pg.page.html',
  styleUrls: ['./loading-pg.page.scss'],
})
export class LoadingPgPage {
  constructor(private loadingCtrl: LoadingController) {}

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 3000,
      spinner: 'circular',
    });

    loading.present();
  }
}
