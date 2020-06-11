import { Component } from '@angular/core';
import { TodoItem } from '../models/todo-item';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: TodoItem[] = [
    // {
    //   text: 'test',
    //   state: false
    // }
  ];

  constructor(private alertCtrl: AlertController) {

  }
  async alertAdd() {
    let newItem: string;
    const alert = await this.alertCtrl.create({
      header: 'Add item',
      message: 'Add a new item',
      inputs: [
        {
          name:'title',
          placeholder: 'Enter a text'
        }
      ],
      buttons: [
        {
          text: 'Add',
          handler: data => {
            this.items.push({
              text: data.title,
              state: false
            })
          }
        },
        {
          text:'Cancel',
          cssClass: 'my-danger'
        }
      ]
    })
    await alert.present()
  }

}
