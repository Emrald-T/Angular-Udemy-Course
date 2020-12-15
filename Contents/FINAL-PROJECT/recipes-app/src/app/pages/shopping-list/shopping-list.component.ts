import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from '../../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  ingChangedSubcription: Subscription;

  constructor(private shoppingSrv: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingSrv.getIngredients();
    this.ingChangedSubcription = this.shoppingSrv.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  onEditItem(index: number): void {
    this.shoppingSrv.editItem(index);
  }

  ngOnDestroy(): void {
    this.ingChangedSubcription.unsubscribe();
  }
}
