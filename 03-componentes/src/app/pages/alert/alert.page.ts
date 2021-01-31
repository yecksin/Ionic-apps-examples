import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  
  titulo: string;

  constructor(public alerta: AlertController) { }
  async presentAlert() {
    const alert = await this.alerta.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
        text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('boton cancelar');
          }
        },        {
          text: 'ok',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Boton ok');
            }
          }

      ]
    });

    await alert.present();
  }
  


  //yo mismo
  async presentAlertPrompt() {
    const alert = await this.alerta.create({
      header: 'input',
      subHeader: 'ingrese su nombre',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'pablo Neruda'
        }
        
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok',data); // data tiene la info en la mano, puede ser otro nombre
            this.titulo = data.name1;
          }
        }
      ]
    });

    await alert.present();
  }
  //yo mismo fin 



  ngOnInit() {
  }

}
