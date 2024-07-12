import { Component, OnInit ,inject } from '@angular/core';
import {ActivatedRoute, Router,RouterLink} from '@angular/router';
import { Cocktail } from '../models/Cocktail';
import { CocktailService } from '../services/cocktail.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-cocktail',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './detail-cocktail.component.html',
  styleUrl: './detail-cocktail.component.scss'
})
export class DetailCocktailComponent implements OnInit{
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  cocktailId:number;
  cocktail:Cocktail;
  favorites?:string='';

  constructor(private cocktailService:CocktailService){

  }

    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.cocktailId = +params['id'];
        this.initCocktail();
     });
     this.favorites=localStorage.getItem('favorites')?.toString();
    }

    initCocktail(){
      this.cocktailService.getAllCocktailsById(this.cocktailId.toString()).subscribe(data => {
        this.cocktail=data;
      });
    }

    updateFavorites(cocktailId:string){
      this.favorites=this.cocktailService.updateFavorites(cocktailId,this.favorites);
    }

  
}
