import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  @Input('fav') isFavourite: boolean;
  @Output('starChange') change = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isFavourite = !this.isFavourite;
    //this.change.emit(); /* output Property */
    //this.change.emit(this.isFavourite); /* simple passing */
    this.change.emit({ newValue: this.isFavourite });
  }

}

export interface FavChangedArgs {
  newValue: boolean
}