import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  //componentes: any []=[]; no porque necesitamos als ayudas de typescript
  //componentes: Componente []=[]; asi se vea la instancia, ahora con contendo asi -->
  
  componentes: Observable <Componente[]>;
  constructor(private menuCtrl: MenuController, private dataServide: DataService ) { }

  ngOnInit() {
    this.componentes= this.dataServide.getMenuOpts();
  }
    toggleMenu(){
  
  this.menuCtrl.toggle();
}

}

//creamos una interface

