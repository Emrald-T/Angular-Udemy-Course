import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from '../../models/ingredient.model';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {
  @Input() data: Ingredient;
  @Input() index: number;

  constructor(private shoppingSrv: ShoppingListService) { }

  ngOnInit(): void {
  }

  onDeleteItem(index: number): void {
    this.shoppingSrv.deleteItem(index);
  }
}
