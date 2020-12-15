import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean;
  recipeForm: FormGroup;

  constructor(private recipeSrv: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editMode = params.id != null;
        this.initForm();
      }
    );
  }

  private initForm(): void {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDesc = '';
    let recipeSteps = '';
    const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeSrv.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDesc = recipe.description;
      recipeSteps = recipe.steps;
      if (recipe.ingredients) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/[1-9]+\d*(\.\d+)?/)])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      recipeName: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDesc, Validators.required),
      steps: new FormControl(recipeSteps, Validators.required),
      ingredients: recipeIngredients
    });
  }

  getIngredients(): FormArray {
    return (this.recipeForm.get('ingredients') as FormArray);
  }

  onAddIngredient(): void {
    this.getIngredients().push(new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(1, [Validators.required, Validators.pattern(/[1-9]+\d*(\.\d+)?/)])
    }));
  }

  onDeleteIngredient(index: number): void {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }

  onSubmit(): void {
    const newRecipe = new Recipe(
      this.recipeForm.value.recipeName,
      this.recipeForm.value.description,
      this.recipeForm.value.imagePath,
      this.recipeForm.value.ingredients || [new Ingredient('No data', null)],
      this.recipeForm.value.steps
    );

    if (this.editMode) {
      this.recipeSrv.updateRecipe(this.id, newRecipe);
    } else {
      this.recipeSrv.addRecipe(newRecipe);
    }
    this.onCancel();
  }

  onCancel(): void {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
