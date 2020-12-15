import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  index: number;

  constructor(private recipeSrv: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.recipe = this.recipeSrv.getRecipe(+this.route.snapshot.params.id);
    this.route.params.subscribe(
      (params: Params) => {
        this.index = +params.id;
        this.recipe = this.recipeSrv.getRecipe(+params.id);
      }
    );
  }

  add2ShopList(ingredients: Ingredient[]): void {
    this.recipeSrv.addRecipeIngredients(this.index, ingredients);
  }

  onDeleteRecipe(): void {
    this.recipeSrv.deleteRecipe(this.index);
    this.router.navigate(['/recipes']);
  }
}
