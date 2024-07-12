import { Component, Input, OnInit } from '@angular/core';
import {RouterLink} from '@angular/router';
import { CocktailService } from '../services/cocktail.service';

@Component({
  selector: 'app-cocktail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cocktail.component.html',
  styleUrl: './cocktail.component.scss'
})
export class CocktailComponent implements OnInit{

  @Input() cocktailId: string ='';
  @Input() name: string ='';
  @Input() isAlcoholic: string='';
  @Input() imageUrl : string='';
  @Input() instructions: string='';
  @Input() ingredients: string='';

  favorites?:string='';

  constructor(private cocktailService:CocktailService){

  }
  ngOnInit(): void {
    this.isAlcoholic == 'true' ? this.isAlcoholic='Alcoholic' : this.isAlcoholic='Non Alcoholic';
    this.favorites=localStorage.getItem('favorites')?.toString();
  }


  updateFavorites(cocktailId:string){
    this.favorites=this.cocktailService.updateFavorites(cocktailId,this.favorites);
  }
}
