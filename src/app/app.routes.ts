import { Routes } from '@angular/router';
import { ListCocktailsComponent } from '../list-cocktails/list-cocktails.component';
import { DetailCocktailComponent } from '../detail-cocktail/detail-cocktail.component';

export const routes: Routes = [
    { path: '', component: ListCocktailsComponent },
    { path: 'list-cocktails/:id', component: DetailCocktailComponent }
];
