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

  private clearInputField(): void {
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';
  }

  public onAddItem(): void {
    const ingName: string = this.nameInputRef.nativeElement.value;
    const ingAmt: number = this.amountInputRef.nativeElement.value;

    const newIngredient: Ingredient = new Ingredient(ingName, ingAmt);
    this.ingredientAdded.emit(newIngredient);

    this.clearInputField();
  }

  public onDeleteItem(): void {
    const ingName: string = this.nameInputRef.nativeElement.value;
    const ingAmt: number = this.amountInputRef.nativeElement.value;

    const deletedIngredient: Ingredient = new Ingredient(ingName, ingAmt);

    this.ingredientDeleted.emit(deletedIngredient);
    this.clearInputField();
  }

  public onClearFields(): void {
    this.fieldsCleared.emit();
    this.clearInputField();
  }


}
