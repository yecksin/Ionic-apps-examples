import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  valorSegmento='';
  @ViewChild (IonSegment,{static: true}) segment: IonSegment;
  superheroes: Observable <any>;
  constructor(private dataServie: DataService) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.superheroes= this.dataServie.getHeroes();
  } 
  segmentChanged(event){
    this.valorSegmento = event.detail.value;
    if(this.valorSegmento==='todos'){
      this.valorSegmento='';
    }
    console.log(this.valorSegmento);
  }
}
