import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})


export class AppComponent {
  title = 'ControlPointWeb';
  public name = "testcomponent"; //data exchange bewteen main and testcomponent
  public message = "component message";
} 
