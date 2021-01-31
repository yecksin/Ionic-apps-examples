import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popooverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async verPopover(ev: any) {
    const popover = await this.popooverCtrl.create({
      component: PopinfoComponent,
      event: ev,
      mode:"ios",
      translucent: true,
      backdropDismiss:false //tiene que exisitir una interaccion con el pop over para qque se cierre
    });
     await popover.present();
     //const {data} =await popover.onDidDismiss(); //esperas que se cierrer con animacion
     const {data} =await popover.onWillDismiss(); //apenas tenga la señal de cerrado
     console.log(data);
  }

}
