import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  public recipes: Recipe[] = [
    new Recipe("Test", "Test", "https://m.media-amazon.com/images/I/416lI5JIf3L._AC_UF894,1000_QL80_.jpg"),
    new Recipe("Buldak Ramyun", "Buldak Ramyun is a popular instant noodles!", "https://www.chilipeppermadness.com/wp-content/uploads/2023/01/Buldak-Ramen-SQ-500x500.jpg")
  ];

  public contstructor() { }

  public ngOnInit() { }

}
