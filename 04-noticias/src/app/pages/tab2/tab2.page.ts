import { Component, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild(IonSegment,{static:true}) segment: IonSegment
  categorias =['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  noticicas: Article[] =[];

  constructor(private noticiasService:NoticiasService) {}
  ngOnInit(){
    
    this.CargarNoticicas(this.categorias[0]);
  }
  CambioCategoria(event){
    this.noticicas=[];
    this.CargarNoticicas(event.detail.value);
  }
  CargarNoticicas(categoria: string,event?){
    
    this.noticiasService.getTopHeadLinesCategorias(categoria)
    .subscribe(resp=>{
      //console.log(resp);
      this.noticicas.push(...resp.articles);
      if(event){
        event.target.complete();
      }
    });
  }

  loadData(event){
    this.CargarNoticicas(this.segment.value,event);
  }

  
}
