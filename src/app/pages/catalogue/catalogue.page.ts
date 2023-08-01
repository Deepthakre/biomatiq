import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }
  dismiss() {
    this.modalController.dismiss({
     
    });
  }
}
