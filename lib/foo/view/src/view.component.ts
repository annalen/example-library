import { Component, OnInit } from '@angular/core';
import {SettingsService} from "../../bar/src/settings.service";

@Component({
  selector: 'app-bar-component',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  constructor(private service: SettingsService) {
    console.log("ViewComponent  "+service.serviceName);
  }

}
