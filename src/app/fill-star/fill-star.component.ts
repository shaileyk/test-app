import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fill-star',
  templateUrl: './fill-star.component.html',
  styleUrls: ['./fill-star.component.scss']
})
export class FillStarComponent implements OnInit {
  BlackStar = 'glyphicon glyphicon-star gi-5x';
  emptyStar = 'glyphicon glyphicon-star-empty gi-5x';
  isBlackStar = true;
  starClass = this.BlackStar;

  constructor() { }

  ngOnInit(): void {
  }

  changeStar() {
    if (this.isBlackStar) {
      this.starClass = this.emptyStar;
      this.isBlackStar = false;
    } else {
      this.starClass = this.BlackStar;
      this.isBlackStar = true;
    }
  }

}
