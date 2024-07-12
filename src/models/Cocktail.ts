export class Cocktail {
    id:string;
    name: string;
    isAlcoholic: boolean;
    imageUrl : string;
    instructions: string;
    ingredients: string[];
    

    constructor( id:string,name: string,isAlcoholic: boolean,imageUrl : string,instructions: string,ingredients: string[]) {
            this. id=id;
            this.name = name;
            this.isAlcoholic = isAlcoholic;
            this.imageUrl = imageUrl;
            this.instructions = instructions;
            this.ingredients =ingredients;
    }

}