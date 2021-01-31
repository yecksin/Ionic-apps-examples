import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild ('lista',{static: false}) lista: IonList;
  usuarios: Observable <any>;
  constructor(private dataService: DataService, private toastCtrl: ToastController) { }

  async presentToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    //this.dataService.getUSers().subscribe(console.log);
    this.usuarios=this.dataService.getUSers();
  }
  favorite(user){
    console.log('favorite', user);
    this.lista.closeSlidingItems();
  }
  share(user){
    console.log('share', user);
    this.lista.closeSlidingItems();
  }
  borrar(user){
    console.log('borrar', user);
    this.lista.closeSlidingItems();
    this.presentToast('Elemento borrado');
  } 

}
