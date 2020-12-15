import {
  AfterViewChecked,
  Component,
  Input,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { RecipeService } from 'src/app/services/recipes.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent implements OnInit, AfterViewChecked {
  @ViewChildren('recipeDescRefs') recipeDescElems: QueryList<void>;
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    // Text wrap if greater than 2 lines
    this.recipeDescElems.forEach((item: any) => {
      if (item.nativeElement.scrollHeight > 35) {
        this.renderer.addClass(item.nativeElement, 'wrapped');
      } else {
        this.renderer.removeClass(item.nativeElement, 'wrapped');
      }
    });
  }
}
