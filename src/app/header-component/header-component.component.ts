import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent {
  @Output() public destSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public onSelect(destination: string): void {
    this.destSelected.emit(destination);
  }

}
