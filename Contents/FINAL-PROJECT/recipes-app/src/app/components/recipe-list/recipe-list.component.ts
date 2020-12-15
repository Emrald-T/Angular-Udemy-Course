import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/services/recipes.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  @ViewChildren('recipeDescRefs') recipeDescElems: QueryList<void>;
  @ViewChild('recipeListMenu') recipeListMenu: ElementRef;
  recipesChanged: Subscription;
  recipes: Recipe[] = [];
  title = '';
  showList = false;

  constructor(private renderer: Renderer2,
              private recipeSrv: RecipeService) { }

  ngOnInit(): void {
    this.recipesChanged = this.recipeSrv.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeSrv.getRecipes();
    this.title = this.recipeSrv.title;
  }

  ngOnDestroy(): void {
    this.recipesChanged.unsubscribe();
  }

  showHideList(): void {
    // Handling the show hide part
    const elem = this.recipeListMenu.nativeElement;
    if (!elem.classList.contains('show') && this.showList) {
      this.renderer.addClass(elem, 'show');
    } else {
      this.renderer.removeClass(elem, 'show');
    }
  }

  toggleFlag(): void {
    this.showList = !this.showList;
    this.showHideList();
  }

  searchForRecipe(event: any): void {
    this.recipes = this.recipeSrv.search(event.target.value);
  }

  setItemSelected(): void {
    this.showList = false;
    this.showHideList();
  }
}
