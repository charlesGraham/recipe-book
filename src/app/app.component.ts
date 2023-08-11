import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public loadedDestination: string = "recipe";


  constructor() { }

  public onNavigate(dest: string): void {
    this.loadedDestination = dest;
  }
}
