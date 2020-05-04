import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-filtering',
  templateUrl: './event-filtering.component.html',
  styleUrls: ['./event-filtering.component.scss']
})
export class EventFilteringComponent implements OnInit {

  twoWayBindingEmail = "me@example.com";
  ngModelEmail = "me@example.com";

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp($event) {
    if ($event.keyCode === 13) {
      console.log("ENTER KEY WAS PRESSED");

    }
  }

  alternateKeyUp($event) {
    console.log('Value:', $event.target.value);
  }

  getValueDirectlyOnKeyPress(email) {
    console.log('getValueDirectlyOnKeyPress: ', email);
  }

  twoWayBinding() {
    console.log('getValueDirectlyOnKeyPress: ', this.twoWayBindingEmail);
  }

  ngModelBinding() {
    console.log('getValueDirectlyOnKeyPress: ', this.ngModelEmail);
  }

}
