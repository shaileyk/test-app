import { Component } from '@angular/core';
import { FavChangedArgs } from './favourite/favourite.component';

/* interface are used for objects */


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular App';
  post = {
    isFavourite: true
  };
  onStarChange(isFav: FavChangedArgs) {
    console.log("Fav changed: ", isFav);
  };

  tweets = {
    likesCount: 10,
    isLiked: true
  }
}
