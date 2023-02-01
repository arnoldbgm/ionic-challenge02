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
      message: 'Por favor espere ...',
      duration: 2000,
      spinner: 'lines-sharp',
    });

    loading.present();
  }
}
