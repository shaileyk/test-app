import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  public name = 'testName';
  public myId = "testId";
  public isDisabled = true;

  constructor() { }

  ngOnInit(): void {
  }

}
