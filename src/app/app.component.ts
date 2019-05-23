import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "AngularDirectives-miniproj1";
  friendsNames = ["a", "b", "c"];

  selectedItem = "Student"; //default tab to be displayed

  //capture the current list item selected by the user
  setSelectedItem(item: string) {
    this.selectedItem = item;
  }
}
