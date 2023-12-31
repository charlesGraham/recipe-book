import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  public ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10),
  ];

  constructor() { }

  public onIngredientAdded(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }

  public onIngredientDeleted(ingredient: Ingredient): void {
    const newIngredients = this.ingredients.filter(item => item.name !== ingredient.name);
    this.ingredients = newIngredients;
  }

  public onFieldsCleared(): void {
    this.ingredients = [];
  }
}
