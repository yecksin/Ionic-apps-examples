import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  @Input() y: number;
  @Input() noticia: Article;
  @Input() enFavoritos;
  
  constructor(private iab: InAppBrowser,
              private actionCtrl: ActionSheetController,
              private socialSharing: SocialSharing,
              private dataLocalService : DataLocalService,
              public toastController: ToastController
              ) { }

  ngOnInit() {}

  abirirNoticia(){
    const browser = this.iab.create(this.noticia.url,'_system');
  }
 
  async LanzarMenu() {

    let guardarBorrarBtn;

    if(this.enFavoritos){

      guardarBorrarBtn = {
        text: 'Borrar favorito',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Play clicked');
          this.dataLocalService.borrarNoticia(this.noticia);
          this.toast("Noticia borrada");
        }};
        
    }else{
      guardarBorrarBtn = {
        text: 'favorito',
        icon: 'star',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Play clicked');
          this.dataLocalService.guardarNoticias(this.noticia);
          this.toast("Noticia Guardada");
        }};
    }

    const actionSheet = await this.actionCtrl.create({
      
      buttons: [
       {
        text: 'Compartir',
        icon: 'share',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Share clicked');
          this.socialSharing.share(
            this.noticia.title,
            this.noticia.source.name,
            '',
            this.noticia.url
          );
        }
      }, 
      
      guardarBorrarBtn,
       {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  async toast(mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1000,
      position:'top',
      translucent:true,
      animated: true
    });
    toast.present();
  }
  
}
