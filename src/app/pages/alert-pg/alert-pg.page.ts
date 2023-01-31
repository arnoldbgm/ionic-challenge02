import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert-pg',
  templateUrl: './alert-pg.page.html',
  styleUrls: ['./alert-pg.page.scss'],
})
export class AlertPgPage {
  counter: number = 0;

  constructor(private alertController: AlertController) {}

  tapCounter() {
    this.counter++;
    if (this.counter > 10) {
      this.presentAlert();
      this.counter = 0;
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
