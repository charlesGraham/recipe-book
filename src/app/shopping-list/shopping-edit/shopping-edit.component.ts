import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;

  @Output() public ingredientAdded = new EventEmitter<Ingredient>();
  @Output() public ingredientDeleted = new EventEmitter<Ingredient>();
  @Output() public fieldsCleared = new EventEmitter<void>();



  constructor() { }

  public onAddItem(): void {
    const ingName: string = this.nameInputRef.nativeElement.value;
    const ingAmt: number = this.amountInputRef.nativeElement.value;

    const newIngredient: Ingredient = new Ingredient(ingName, ingAmt);
    this.ingredientAdded.emit(newIngredient);
  }

  public onDeleteItem(): void {
    const ingName: string = this.nameInputRef.nativeElement.value;
    const ingAmt: number = this.amountInputRef.nativeElement.value;

    const deletedIngredient: Ingredient = new Ingredient(ingName, ingAmt);

    this.ingredientDeleted.emit(deletedIngredient);
  }

  public onClearFields(): void {
    this.fieldsCleared.emit();
  }


}
