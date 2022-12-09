import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeoffEnabled: boolean = true;

  
  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
      this.takeoffEnabled = false;
    }
  }
  
  handleLanding() {
      let result = window.confirm('Are you ready to land the shuttle?');
      if (result) {
        this.color = 'green';
        this.height = 0;
        this.width = 0;
        this.message = 'Space shuttle has landed and is ready for takeoff!';
      }
  }

  handleAbort() {
    let result = window.confirm('Do you want to abort the mission?');
    if (result) {
      this.color = 'green';
      this.height = 0;
      this.width = 0;
      this.message = 'Mission aborted! Shuttle has landed and is ready for takeoff.';
    }
}

moveRocket(rocketImage, direction) {
   if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    }
    if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    }
    if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }
    if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.width = this.width + 10000;
      if (this.height >= 20000) {
        this.height = this.height - 10000;
      }
    }
  }
}
