import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.scss']
})
export class ClassBindingComponent implements OnInit {

  name = 'Shailey';
  successClass = 'text-success';
  hasError = true;
  isSpecial = true;
  messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-italic": this.isSpecial
  }

  constructor() { }

  ngOnInit(): void {
  }

}
