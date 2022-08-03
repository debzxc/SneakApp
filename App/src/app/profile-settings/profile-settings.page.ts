import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.page.html',
  styleUrls: ['./profile-settings.page.scss'],
})
export class ProfileSettingsPage implements OnInit {

  constructor(private loadingCtrl: LoadingController) {}

  ngOnInit() {
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Saving',
      duration: 3000
    });
    
    loading.present();
  }
}

