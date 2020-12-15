import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { MessageService } from './message.service';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ShoppingListService {
    constructor(private msgService: MessageService) {}

    name = '';
    amount = 0;
    currentIndex = -1;
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];
    private recipeIds: number[] = [];
    ingredientsChanged = new Subject<Ingredient[]>();
    editStarted = new Subject<number>();

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    getIngredient(index: number): Ingredient {
        return this.ingredients.slice()[index];
    }

    checkItemExists(item: string): Ingredient {
        return this.ingredients.find(
            ingredient => item && ingredient.name.toLocaleUpperCase() === item.toLocaleUpperCase());
    }

    addItem(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
        this.msgService.messageAvailable.emit('Added ingredient to Shopping list');
    }

    addRecipeIngredients(id: number, ingredients: Ingredient[]): void {
        if (this.recipeIds.indexOf(id) === -1) {
            this.recipeIds.push(id);
            this.ingredients = [...this.ingredients, ...ingredients];
            this.ingredientsChanged.next(this.ingredients.slice());
            this.msgService.messageAvailable.emit('Added ingredients to Shopping list');
        } else {
            this.msgService.messageAvailable.emit('Ingredients of this recipe has already been added to the Shopping list');
        }
    }

    editItem(index: number): void {
        this.editStarted.next(index);
    }

    updateItem(index: number, ing: Ingredient): void {
        this.ingredients[index] = ing;
        this.ingredientsChanged.next(this.ingredients.slice());
        this.msgService.messageAvailable.emit('List item edited');
    }

    deleteItem(index: number): void {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
        this.msgService.messageAvailable.emit('List item deleted');
        this.editStarted.next(index);
    }
}
