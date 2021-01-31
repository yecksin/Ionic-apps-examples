import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadLines } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const apiKey =environment.apiKey;
const apiUrl = environment.apiUrl;
const headers = new HttpHeaders({
  'X-Api-Key':apiKey
});
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  headlinespage=0;
  categoriaActual='';
  categoriapage=0;
  constructor(private http:HttpClient) { }

  private ejecutarQuery<T>(query:string){
    query=apiUrl + query
    return this.http.get<T>(query,{headers});
  }

  getTopHeadLines(){
    this.headlinespage++;
    return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=co&page=${this.headlinespage}`);
    //return this.http.get<RespuestaTopHeadLines>(`https://newsapi.org/v2/top-headlines?country=co&apiKey=c0d1f0510d6b4692b87f55e8b8223397`)
  }

  getTopHeadLinesCategorias(categoria: string){
    if(this.categoriaActual===categoria){
      this.categoriapage++;
    }else{
      this.categoriapage=1;
      this.categoriaActual=categoria;
    }
    //return this.http.get<RespuestaTopHeadLines>(`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=c0d1f0510d6b4692b87f55e8b8223397`);
    return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=us&category=${categoria}&page=${this.categoriapage}`);
  }
}
