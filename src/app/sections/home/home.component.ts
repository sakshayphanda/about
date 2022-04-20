import { Component, OnInit } from "@angular/core";
import { GlobalDataService } from "src/app/services/global-data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"],
})
export class HomeComponent implements OnInit {
  showMenuButton = false;
  showSideMenu = true;
  constructor(private globalData: GlobalDataService) {}

  ngOnInit(): void {
    setTimeout(() => {
      const width = Math.max(window.screen.width, window.innerWidth);
      if (width < 900) {
        this.showMenuButton = true;
        this.showSideMenu = false;
      } else {
        this.showMenuButton = false;
        this.showSideMenu = true;
      }
    }, 0);

    this.globalData.toggleSideMenu.subscribe((response) => {
      if (window.innerWidth < 900) {
        this.showSideMenu = !this.showSideMenu;
      }
    });

    window.addEventListener("resize", (ev) => {
      console.log(ev);

      if (ev[`target`][`innerWidth`] < 900) {
        this.showMenuButton = true;
        this.showSideMenu = false;
      } else {
        this.showMenuButton = false;
        this.showSideMenu = true;
      }
    });
  }
}
