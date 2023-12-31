import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() public recipe!: Recipe;
  @Output() public recipeSelected: EventEmitter<void> = new EventEmitter();

  constructor() { }

  public onClick() {
    this.recipeSelected.emit();
  }

}
