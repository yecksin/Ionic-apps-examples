import { Component } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  noticias: Article []= [];
  constructor(private noticiasService:NoticiasService) {}

  ngOnInit(){
    this.cargarnoticicas();
  }

  loadData(event){
    this.cargarnoticicas(event);
  }

  cargarnoticicas(event?){
    this.noticiasService.getTopHeadLines().subscribe(resp=>{
      console.log('noticias',resp);
      if(resp.articles.length===0){
        event.target.disabled = true;
        event.target.complete();
        return;
      }
      //this.noticias= resp.articles; no porque sobrescribe lo que estaba antes
      this.noticias.push(...resp.articles); //push para mater en el array y ... para que lo que este
      // en el array sea de manera indepenedniente no entre el array entero en una seccion
      if(event){
        event.target.complete();
      }
    })
  }

}
