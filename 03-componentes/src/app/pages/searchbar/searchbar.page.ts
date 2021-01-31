import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  albunes: any[] =[];
  textoBsucar='';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log(event);
    this.dataService.getAlbunes().subscribe(albunes=>{
      console.log(albunes);
      this.albunes=albunes;
    });
  }
  buscar(event){
    this.textoBsucar = event.detail.value;
  }
}
