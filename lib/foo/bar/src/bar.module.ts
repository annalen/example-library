import {APP_INITIALIZER, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingsService} from "./settings.service";

export function init_app(settingsService: SettingsService) {
    // Do initing of services that is required before app loads
    console.log(SettingsService.name);
    return () => settingsService.load();
}

@NgModule({
  imports: [
    CommonModule
  ],
    providers: [
        SettingsService,
        {
            provide: APP_INITIALIZER,
            useFactory: init_app,
            deps: [SettingsService],
            multi: true
        }
    ]
})
export class BarModule { }
