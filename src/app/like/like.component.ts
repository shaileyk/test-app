import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss'],
})
export class LikeComponent {

  @Input('active') isHeartSelected: boolean;
  @Input('heartCounts') likesCount: number;


  onClick() {
    this.isHeartSelected = !this.isHeartSelected
    this.likesCount += !this.isHeartSelected ? -1 : 1;
  }


}
