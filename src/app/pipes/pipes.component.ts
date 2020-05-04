import { TitleCasePipe } from './titleCase.pipes';
import { Component, OnInit, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /* Built in pipes
    - UpperCase
    - LowerCase
    - Decimal
    - Currency
    - Percent
  */

  course = {
    title: 'The complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2020, 5, 4)
  }

  title = 'For a long time Pierre could not understand, but when he did, he jumped up from the sofa, seized Boris under the elbow in his quick, clumsy way, and, blushing far more than Boris, began to speak with a feeling of mingled shame and vexation.';

  titleCaseTitle: string;

  onKeyEnter() {
    this.titleCaseTitle = "{{titleCaseTitle | titleCase}}";
  }
}
