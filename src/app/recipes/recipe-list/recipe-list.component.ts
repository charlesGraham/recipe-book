import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  public recipes: Recipe[] = [
    new Recipe("Test", "Test", "https://www.persnicketyprints.com/wp-content/uploads/2020/09/Jenna-cards1.jpg"),
    new Recipe("Buldak Ramyun", "Buldak Ramyun is a popular instant noodles!", "https://www.chilipeppermadness.com/wp-content/uploads/2023/01/Buldak-Ramen-SQ-500x500.jpg")
  ];
  @Output() public recipeClicked = new EventEmitter<Recipe>();

  public contstructor() { }

  public ngOnInit() { }

  public onRecipeSelected(recipe: Recipe) {
    this.recipeClicked.emit(recipe);
  }

}
