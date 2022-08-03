import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import{ ModalpopupPage }from '../modalpopup/modalpopup.page';
@Component({
  selector: 'app-uhome',
  templateUrl: './uhome.page.html',
  styleUrls: ['./uhome.page.scss'],
})
export class UhomePage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  
  OpenModal()
  {
    this.modalController.create({component:ModalpopupPage}).then((modalElement)=>{
      modalElement.present();
    })
  }
}


