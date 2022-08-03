import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.page.html',
  styleUrls: ['./modalpopup.page.scss'],
})
export class ModalpopupPage implements OnInit {

  constructor(private loadingCtrl: LoadingController) {}

  ngOnInit() {
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Creating Post',
      duration: 3000
    });
    
    loading.present();
  }
}

