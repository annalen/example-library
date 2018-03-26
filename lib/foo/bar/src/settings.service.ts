import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  public serviceName: string = "@anna.len/example-library/foo/bar/src/settings.service";
  public variable: string;

  constructor() {
    console.log("HELLO: " + this.serviceName);
  }

  load() {
    console.log("LOAD: "+this.serviceName);
    this.variable = "HUHU library settings";
  }

}
