import { AuthorServices } from './authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent {
  title = '3 Authors';
  authors;

  constructor(service: AuthorServices) {
    this.authors = service.getAuthors();
  }

}
