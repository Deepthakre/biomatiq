import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CataloguePage } from '../catalogue/catalogue.page';

@Component({
  selector: 'app-catalogue1',
  templateUrl: './catalogue1.page.html',
  styleUrls: ['./catalogue1.page.scss'],
})
export class Catalogue1Page implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }
  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }
  async OpenStatus(){ 
    let modal = await this.modalCtrl.create({ 
       component: CataloguePage, 
       backdropDismiss:false,
       cssClass: 'status_modal' 
    }); 
    modal.present(); 
  }
}
