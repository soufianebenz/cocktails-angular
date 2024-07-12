import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Cocktail} from '../models/Cocktail';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { 
  }

  getAllCocktails():Observable<Cocktail[]>{
    return this.http.get<Cocktail[]>('cockails');
  }

  getAllCocktailsById(id:string):Observable<Cocktail>{
    return this.http.get<Cocktail>('cockails/'+id);
  }

  updateFavorites(cocktailId:string,favorites:string|undefined):string{
    if(!favorites?.includes(cocktailId)){
    favorites=localStorage.getItem('favorites')?.toString()+","+cocktailId;
    }else{
    favorites=localStorage.getItem('favorites')?.toString().replace(","+cocktailId,'');
    }
    localStorage.setItem('favorites', favorites+"");
    return favorites!=undefined?favorites:'';
  }
 
}
