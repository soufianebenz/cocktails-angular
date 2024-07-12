import { Routes } from '@angular/router';
import { ListCocktailsComponent } from '../list-cocktails/list-cocktails.component';
import { DetailCocktailComponent } from '../detail-cocktail/detail-cocktail.component';

export const routes: Routes = [
    { path: 'cocktails', component: ListCocktailsComponent },
    { path: 'cocktails/:id', component: DetailCocktailComponent }
];
