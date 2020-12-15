import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';
import { Subject } from 'rxjs';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
    providedIn: 'root'
})

export class RecipeService {
    constructor(private shoplistSrv: ShoppingListService) {}

    recipes: Recipe[] = [
        new Recipe(
            'Crab cake',
            'I\'m drooling already!!',
            'https://stlcooks.com/wp-content/uploads/2013/05/crab_cakes.jpg',
            [
                new Ingredient('Minced Crab meat (kg)', 1.5),
                new Ingredient('Eggs (pcs)', 4),
                new Ingredient('Water (ml)', 500),
                new Ingredient('Bread crumbs (g)', 500),
                new Ingredient('Salt (tbsp)', 2),
                new Ingredient('Pepper (tbsp)', 1),
                new Ingredient('Cooking Oil (lt)', 1),
            ],
            'Take the minced meat and mash it. Add salt and pepper and continue mashing. ' +
            'Beat the eggs and pour it on top of the meat. Mixing the two until the entire ' +
            'batch of meat is moist. Leave the meat aside for half an hour.\n\n' +
            'Keep the bread crumbs ready in a separate vessel. Heat up the oil in the pan and keep it on medium flame. ' +
            'Take the chunks of crab meat, dip them in bread crumbs until completely covered, and then put ' +
            'it on the frying pan. Fry them till each side becomes reddish-brown. Once ready, put it on a plate ' +
            'and serve hot.'
            ),
        new Recipe(
            'Greek Salad',
            'Get healthy with every bite.',
            'https://www.theidearoom.net/wp-content/uploads/2015/04/Tomato_Cucumber_Avocado_SaladCU.jpg',
            [
                new Ingredient('Baby tomatoes', 10),
                new Ingredient('Cucumber', 2),
                new Ingredient('Red Capsicum', 1),
                new Ingredient('Green Capsicum', 1),
                new Ingredient('Yogurt', 1),
                new Ingredient('Mayonnaise', 1)
            ],
            '')
    ];
    title = `Recipes (${this.recipes.length})`;
    recipesChanged = new Subject<Recipe[]>();

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    getRecipe(index: number): Recipe {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe): void {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe): void {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    addRecipeIngredients(id: number, ingredients: Ingredient[]): void {
        this.shoplistSrv.addRecipeIngredients(id, ingredients);
    }

    deleteRecipe(index: number): void {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    search(value: string): Recipe[] {
        let results: Recipe[];
        if (value && value.trim() !== '') {
            results = this.recipes.filter((item) => {
            return item.name.toLocaleLowerCase().includes(value);
          });
        } else {
            results = this.recipes.filter((item) => {
            return true;
          });
        }
        return results;
    }
}
