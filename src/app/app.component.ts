import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showhideSideBar: false;

  onShowHideSideBar(showhideSideBar){
this.showhideSideBar = this.showhideSideBar;
  }
}
