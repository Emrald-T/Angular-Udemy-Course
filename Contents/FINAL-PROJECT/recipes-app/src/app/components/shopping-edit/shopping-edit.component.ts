import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from '../../models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  itemName = '';
  amount = 1;
  index = -1;
  editMode = false;

  constructor(private shoppingSrv: ShoppingListService) { }

  ingredientForm: FormGroup;

  ngOnInit(): void {
    this.ingredientForm = new FormGroup({
      itemName: new FormControl(null, Validators.required),
      amount: new FormControl(1, [Validators.required, Validators.min(1)]),
    });
    // If editting
    this.shoppingSrv.editStarted.subscribe(
      (index: number) => {
        const item = this.shoppingSrv.getIngredient(index);
        if (item) {
          this.editMode = true;
          this.index = index;
          this.ingredientForm.setValue({
            itemName: item.name,
            amount: item.amount,
          });
        } else {
          this.onClearForm();
          this.index = -1;
        }
      }
    );
  }

  onSubmit(): void {
    if (this.editMode) {
      this.shoppingSrv.updateItem(
        this.index,
        new Ingredient(this.ingredientForm.value.itemName, this.ingredientForm.value.amount)
      );
    } else {
      this.shoppingSrv.addItem(new Ingredient(this.ingredientForm.value.itemName, this.ingredientForm.value.amount));
    }

    this.onClearForm();
  }

  onClearForm(): void {
    this.editMode = false;
    this.ingredientForm.reset({
      itemName: '',
      amount: 1
    });
  }

  existingItem(control: FormControl): {[key: string]: boolean } | null{
    if (this.shoppingSrv.checkItemExists(control.value)) {
      return { itemAlreadyExists: true };
    }
    return null;
  }
}
