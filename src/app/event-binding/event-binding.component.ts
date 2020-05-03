import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  name = "Welcome to Event Binding Component.";
  greeting = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event) {
    console.log(event);
    // this.greeting = this.name;
    this.greeting = event.type;

  }

}
