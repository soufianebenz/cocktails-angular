import { Component,Input, OnInit, SimpleChanges } from '@angular/core';
import { CocktailComponent } from '../cocktail/cocktail.component';
import { CocktailService } from '../services/cocktail.service';
import { Cocktail } from '../models/Cocktail';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list-cocktails',
  standalone: true,
  imports: [CocktailComponent,CommonModule],
  templateUrl: './list-cocktails.component.html',
  styleUrl: './list-cocktails.component.scss'
})
export class ListCocktailsComponent implements OnInit {
  cocktails:Cocktail[]=[];
  cocktailName : string="";
  constructor(private cocktailService:CocktailService){

  }

  ngOnInit(): void {
    this.initCocktails();
  }

  getValue(event: Event): string {
    if((event.target as HTMLInputElement).value.length >= 3){
      
      this.cocktailService.getAllCocktails().subscribe(data => {
        this.cocktails=data.filter((ele)  => ele.name.startsWith((event.target as HTMLInputElement).value));
      });
    }else{
      this.initCocktails();
    }
    return (event.target as HTMLInputElement).value;
  }

  initCocktails(){
    this.cocktailService.getAllCocktails().subscribe(data => {
      this.cocktails=data;
    });
  }

}
